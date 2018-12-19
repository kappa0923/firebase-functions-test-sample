'use strict';

const functions = require('firebase-functions');

exports.makeLowercase = functions.firestore.document('posts/{postId}').onCreate((snap, context) => {
  // Firestoreに書き込まれた元の書き込みを取得
  const original = snap.data().original;
  const converted = original.toLowerCase();

  // 変換後の文字列を非同期(Promise)で書き込み
  return snap.ref.set({
    converted
  }, { merge: true });
});
