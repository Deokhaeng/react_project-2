// dictionary.js
import { db } from "../../firebase";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

// // Actions
const LOAD = "dictionary/LOAD";
const CREATE = "dictionary/CREATE";
const UPDATE = "dictionary/UPDATE";
const DELETE = "dictionary/DELETE";

const initialState = {
  list: [],
};

// // Action Creators
export function loadDictionary(dictionary_list) {
  return { type: LOAD, dictionary_list };
}

export function createDictionary(dictionary) {
  console.log("액션을 생성할거야!");
  return { type: CREATE, dictionary };
}

export function updateDictionary(dictionary_index) {
  return { type: UPDATE, dictionary_index };
}

export function deleteDictionary(dictionary_index) {
  console.log("지울 사전 인덱스", dictionary_index);
  return { type: DELETE, dictionary_index };
}

// // middlewares
export const loadDictionaryFB = () => {
  return async function (dispatch) {
    const dictionary_data = await getDocs(collection(db, "dictionary"));

    let dictionary_list = [];

    dictionary_data.forEach((word) => {
      dictionary_list.push({ id: word.id, ...word.data() });
    });
    dispatch(loadDictionary(dictionary_list));
  };
};

export const addDictionaryFB = (dictionary) => {
  return async function (dispatch) {
    const docRef = await addDoc(collection(db, "dictionary"), dictionary);
    const _dictionary = await getDoc(docRef);
    const dictionary_data = { id: _dictionary.id, ..._dictionary.data() };
  };
};

export const updateDictionaryFB = (dictionary_data) => {
  return async function (dispatch, getState) {
    const docRef = doc(db, "dictionary", dictionary_data.id);
    await updateDoc(docRef, {
      word: dictionary_data.word,
      example: dictionary_data.example,
      explanation: dictionary_data.explanation,
    });

    const _dictionary_list = getState().dictionary.list;
    const dictionary_index = _dictionary_list.findIndex((d) => {
      return d.id === dictionary_data.id;
    });

    dispatch(updateDictionary(dictionary_index));
  };
};

export const deleteDictionaryFB = (dictionary_id) => {
  return async function (dispatch, getState) {
    if (!dictionary_id) {
      window.alert("아이디가 없네요!");
      return;
    }
    const docRef = doc(db, "dictionary", dictionary_id);
    await deleteDoc(docRef);

    const _dictionary_list = getState().dictionary.list;
    const dictionary_index = _dictionary_list.findIndex((d) => {
      return d.id === dictionary_id;
    });
    dispatch(deleteDictionary(dictionary_index));
  };
};

// // Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "dictionary/LOAD": {
      return { list: action.dictionary_list };
    }

    case "dictionary/CREATE": {
      const new_dictionary_list = [...state.list, action.dictionary];
      return { list: new_dictionary_list };
    }

    case "dictionary/UPDATE": {
      const new_dictionary_list = state.list.map((l, idx) => {
        if (parseInt(action.dictionary_index) === idx) {
          return {
            ...l,
          };
        } else {
          return l;
        }
      });
      console.log({ list: new_dictionary_list });
      return { ...state, list: new_dictionary_list };
    }

    case "dictionary/DELETE": {
      const new_dictionary_list = state.list.filter((l, idx) => {
        return parseInt(action.dictionary_index) !== idx;
      });
      return { list: new_dictionary_list };
    }
    default:
      return state;
  }
}
