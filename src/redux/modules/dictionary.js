// dictionary.js
// import { db } from "../../firebase";
// import {
//   collection,
//   doc,
//   getDoc,
//   getDocs,
//   addDoc,
//   updateDoc,
//   deleteDoc,
// } from "firebase/firestore";

// // Actions
// // const UPDATE = "my-app/widgets/UPDATE";
// // const REMOVE = "my-app/widgets/REMOVE";
// // const LOAD = "my-app/widgets/LOAD";
// const LOAD = "bucket/LOAD";
const CREATE = "dictionary/CREATE";
// const UPDATE = "dictionary/UPDATE";
const DELETE = "dictionary/DELETE";
// const LOADED = "bucket/LOADED";

const initialState = {
  //   is_loaded: false,

  // list: [
  //   { text: "영화관 가기", completed: false },
  //   { text: "매일 책읽기", completed: false },
  //   { text: "수영 배우기", completed: false },
  //   { text: "코딩하기", completed: false },
  // ],
  list: [
    {
      word: "ㅎ1ㅎadsfdsfa1",
      explanation: "히히를 변형한 단어. 숫자1을 | 로 쓴다.",
      example: "저 친구가 초콜릿을 줬어.",
    },
  ],
};

// // Action Creators
// export function loadBucket(bucket_list) {
//   return { type: LOAD, bucket_list };
// }

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

// // export function loadWidgets() {
// //   return { type: LOAD };
// // }

// // export function createWidget(widget) {
// //   // {widget: widget} == {widget}
// //   return { type: CREATE, widget };
// // }

// // export function updateWidget(widget) {
// //   return { type: UPDATE, widget };
// // }

// // export function removeWidget(widget) {
// //   return { type: REMOVE, widget };
// // }

// // middlewares
// export const loadBucketFB = () => {
//   return async function (dispatch) {
//     const bucket_data = await getDocs(collection(db, "bucket"));
//     console.log(bucket_data);

//     let bucket_list = [];

//     bucket_data.forEach((b) => {
//       console.log(b.data());
//       bucket_list.push({ id: b.id, ...b.data() });
//     });
//     console.log(bucket_list);

//     dispatch(loadBucket(bucket_list));
//   };
// };

// export const addBucketFB = (bucket) => {
//   return async function (dispatch) {
//     dispatch(isLoaded(false));
//     const docRef = await addDoc(collection(db, "bucket"), bucket);
//     // const _bucket = await getDoc(docRef);
//     const bucket_data = { id: docRef.id, ...bucket };

//     // const docRef = await addDoc(collection(db, "bucket"), bucket);
//     // const _bucket = await getDoc(docRef);
//     // const bucket_data = { id: _bucket.id, ..._bucket.data() };

//     // console.log((await getDoc(docRef)).data());
//     // console.log(bucket_data);

//     dispatch(createBucket(bucket_data));
//   };
// };

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
    //     case "bucket/LOAD": {
    //       return { list: action.bucket_list, is_loaded: true };
    //     }

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
