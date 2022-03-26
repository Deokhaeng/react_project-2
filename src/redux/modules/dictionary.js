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
// const UPDATE = "dictionary/UPDATE";
const DELETE = "dictionary/DELETE";
// const LOADED = "bucket/LOADED";

const initialState = {
  //   is_loaded: false,
  list: [
    {
      word: "ㅎ1ㅎ1",
      explanation: "히히를 변형한 단어. 숫자1을 | 로 쓴다.",
      example: "저 친구가 초콜릿을 줬어.",
    },
  ],
};

// // Action Creators
export function loadDictionary(dictionary_list) {
  return { type: LOAD, dictionary_list };
}

export function createDictionary(dictionary) {
  console.log("액션을 생성할거야!");
  return { type: CREATE, dictionary };
}

// export function updateBucket(dictionary) {
//   return { type: UPDATE, dictionary: dictionary };
//   return { type: UPDATE, dictionary_index };
// }

export function deleteDictionary(dictionary_index) {
  console.log("지울 사전 인덱스", dictionary_index);
  return { type: DELETE, dictionary_index };
}

// export function isLoaded(loaded) {
//   return { type: LOADED, loaded };
// }

// // middlewares
export const loadDictionaryFB = () => {
  return async function (dispatch) {
    const dictionary_data = await getDocs(collection(db, "dictionary"));
    console.log(dictionary_data);

    let dictionary_list = [];

    dictionary_data.forEach((word) => {
      console.log(word.data());
      dictionary_list.push({ id: word.id, ...word.data() });
    });
    console.log(dictionary_list);

    dispatch(loadDictionary(dictionary_list));
  };
};

export const addDictionaryFB = (dictionary) => {
  return async function (dispatch) {
    // dispatch(isLoaded(false));
    const docRef = await addDoc(collection(db, "dictionary"), dictionary);
    // const _bucket = await getDoc(docRef);
    const dictionary_data = { id: docRef.id, ...dictionary };

    // const docRef = await addDoc(collection(db, "bucket"), bucket);
    // const _bucket = await getDoc(docRef);
    // const bucket_data = { id: _bucket.id, ..._bucket.data() };

    // console.log((await getDoc(docRef)).data());
    // console.log(bucket_data);

    dispatch(createDictionary(dictionary_data));
  };
};

// export const updateBucketFB = (bucket_id) => {
//   return async function (dispatch, getState) {
//     const docRef = doc(db, "bucket", bucket_id);
//     await updateDoc(docRef, { completed: true });
//     // console.log(bucket_id);
//     console.log(getState().bucket);
//     const _bucket_list = getState().bucket.list;
//     const bucket_index = _bucket_list.findIndex((b) => {
//       return b.id === bucket_id;
//     });
//     dispatch(updateBucket(bucket_index));
//     // console.log(bucket_index);
//   };
// };

// export const deleteBucketFB = (bucket_id) => {
//   return async function (dispatch, getState) {
//     if (!bucket_id) {
//       window.alert("아이디가 없네요!");
//       return;
//     }
//     const docRef = doc(db, "bucket", bucket_id);
//     await deleteDoc(docRef);

//     const _bucket_list = getState().bucket.list;
//     const bucket_index = _bucket_list.findIndex((b) => {
//       return b.id === bucket_id;
//     });
//     dispatch(deleteBucket(bucket_index));
//   };
// };

// // Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "dictionary/LOAD": {
      return { list: action.dictionary_list };
    }

    case "dictionary/CREATE": {
      console.log("이제 값을 바꿀거야!");
      const new_dictionary_list = [...state.list, action.dictionary];
      console.log(new_dictionary_list);
      return { list: new_dictionary_list };

      // return { ...state, list: new_dictionary_list, is_loaded: true };
    }

    // case "dictionary/UPDATE": {
    //   const new_dictionary_list = state.list.map((l, idx) => {
    //     if (parseInt(action.dictionary_index) === idx) {
    //       return { ...l, completed: true };
    //     } else {
    //       return l;
    //     }
    //   });
    //   console.log({ list: new_dictionary_list });
    //   return { ...state, list: new_dictionary_list };
    // }

    case "dictionary/DELETE": {
      // console.log(state, action);
      const new_dictionary_list = state.list.filter((l, idx) => {
        return parseInt(action.bucket_index) !== idx;
        // parseInt(action.bucket_index),
        // idx
      });
      return { list: new_dictionary_list };
    }

    //       console.log(new_bucket_list);
    //       return { ...state, list: new_bucket_list };
    //     }

    //     case "bucket/LOADED": {
    //       return { ...state, is_loaded: action.loaded };
    //     }

    // do reducer stuff
    default:
      return state;
  }
}

// // side effects, only as applicable
// // e.g. thunks, epics, etc
// export function getWidget() {
//   return (dispatch) =>
//     get("/widget").then((widget) => dispatch(updateWidget(widget)));
// }
