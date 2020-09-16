import React from 'react';
import '../Create.scss';
import axios from 'axios';
import classNames from 'classnames';

function C_Form(props) {
	const authorChange = (e) => {
		//名前をセット
		console.log(e.target.value);
		props.setAuthorName(e.target.value);
	};
	const nameChange = (e) => {
		//名前をセット
		console.log(e.target.value);
		props.setPicName(e.target.value);
	};
	const introChange = (e) => {
		//イントロをセット
		console.log(e.target.value);
		props.setIntro(e.target.value);
	};
	const submit = async () => {
		//絵から縦と横の鍵を導いてsubmit
		console.log(props.picArray);

		//縦のカギ
		let verticalKey = [[], [], [], [], [], [], [], [], [], []];

		//左から順に調べる
		for (let i = 0; i < props.picArray.length; i++) {
			//一時保存用
			let store = 0;
			//上から一枚一枚調べる
			for (let array of props.picArray) {
				if (array[i] === 1) {
					//黒だった場合
					store++;
				} else {
					//白の場合
					if (store !== 0) {
						//一時保存に値がある場合、カギに追加
						verticalKey[i].push(String(store));
						store = 0;
					}
				}
			}

			if (store !== 0) {
				//最後に残っていた値を加算
				verticalKey[i].push(String(store));
			}
		}

		//各要素を文字列化
		const mappedVerticalKey = verticalKey.map((array) => {
			if (array.length === 0) {
				return "0";
			} else {
				return array.join(' ');
			}
		});

		//横のカギ

		let lateralKey = [[], [], [], [], [], [], [], [], [], []];
		for (let i in props.picArray) {
			//一時保存用
			let store = 0;
			for (let elm of props.picArray[i]) {
				//黒の場合
				if (elm === 1) {
					store++;
				} else {
					//白の場合
					if (store !== 0) {
						lateralKey[i].push(store);
						store = 0;
					}
				}
			}

			if (store !== 0) {
				//最後に残っていた値を加算
				lateralKey[i].push(store);
			}
		}
		console.log(lateralKey);

		//各要素を文字列化
        const mappedLateralKey = lateralKey.map((array) => {
			if (array.length === 0) {
				return "0";
			} else {
				return array.join('　');
			}
		});

        //ついに縦と横の鍵の文字列がここに完成
		const stringKeys = JSON.stringify([mappedVerticalKey, mappedLateralKey]);
        console.log(stringKeys);
        
        //あとはpostメソッドで送信するだけである
        //送るデータ
        const dataToSend={
            "name":props.picName,
            "author":props.authorName,
            "introduction":props.intro,
            "numbers":stringKeys,
            "picArray":JSON.stringify(props.picArray)
        }

        const postURL='/api/picture/';
        const res = await axios.post(postURL,dataToSend);

	};
	return (
		<div className="formbar">
			<div className="textforms">
				<div>
					<label>
						Your name
						<input className="nameform" type="text" onChange={authorChange} />
					</label>
				</div>
				<div>
					<label>
						Name of pic
						<input className="nameform" type="text" onChange={nameChange} />
					</label>
				</div>
				<div>
					<label>
						Introduction of this picture
						<input className="introform" type="text" onChange={introChange}></input>
					</label>
				</div>
			</div>
			<div className="submit" onClick={submit}>
				Submit!
			</div>
		</div>
	);
}

export default C_Form;
