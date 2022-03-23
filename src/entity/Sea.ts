import { FISH_FONT_SIZE, FISH_INTERVAL, SWIMMING_TIME_RANGE, WATERSURFACE_POS } from "../constants";
import { Fish } from "./Fish";
import { FishingRod } from "./FishingRod";

/**
 * 魚情報インターフェース
 */
interface FishInfo {
	/**
	 * 魚の名前
	 */
	readonly name: string;

	/**
	 * 獲得できるスコア
	 */
	readonly score: number;
}

/**
 * 出現する魚の種類
 */
const fishInfoList: FishInfo[] = [
	{name: "中華人民共和国", score: 14442},
	{name: "インド", score: 13934},
	{name: "アメリカ", score: 3329},
	{name: "インドネシア", score: 2764},
	{name: "パキスタン", score: 2252},
	{name: "ブラジル", score: 2140},
	{name: "ナイジェリア", score: 2114},
	{name: "バングラデシュ", score: 1663},
	{name: "ロシア", score: 1459},
	{name: "メキシコ", score: 1303},
	{name: "日本", score: 1261},
	{name: "エチオピア", score: 1179},
	{name: "フィリピン", score: 1110},
	{name: "エジプト", score: 143},
	{name: "ベトナム", score: 982},
	{name: "コンゴ民主共和国", score: 924},
	{name: "トルコ", score: 850},
	{name: "イラン", score: 850},
	{name: "ドイツ", score: 839},
	{name: "タイ", score: 700},
	{name: "イギリス", score: 682},
	{name: "フランス", score: 654},
	{name: "タンザニア", score: 615},
	{name: "イタリア", score: 604},
	{name: "南アフリカ", score: 600},
	{name: "ケニア", score: 550},
	{name: "ミャンマー", score: 548},
	{name: "コロンビア", score: 513},
	{name: "韓国", score: 513},
	{name: "ウガンダ", score: 471},
	{name: "スペイン", score: 467},
	{name: "アルゼンチン", score: 456},
	{name: "スーダン", score: 449},
	{name: "アルジェリア", score: 446},
	{name: "ウクライナ", score: 435},
	{name: "イラク", score: 412},
	{name: "アフガニスタン", score: 398},
	{name: "カナダ", score: 381},
	{name: "ポーランド", score: 378},
	{name: "モロッコ", score: 373},
	{name: "サウジアラビア", score: 353},
	{name: "アンゴラ", score: 339},
	{name: "ウズベキスタン", score: 339},
	{name: "ペルー", score: 334},
	{name: "マレーシア", score: 328},
	{name: "モザンビーク", score: 322},
	{name: "ガーナ  ", score: 317},
	{name: "イエメン", score: 305},
	{name: "ネパール", score: 297},
	{name: "ベネズエラ", score: 287},
	{name: "マダガスカル", score: 284},
	{name: "カメルーン", score: 272},
	{name: "コートジボワール", score: 271},
	{name: "北朝鮮", score: 259},
	{name: "オーストラリア", score: 258},
	{name: "ニジェール", score: 251},
	{name: "スリランカ", score: 215},
	{name: "ブルキナファソ", score: 215},
	{name: "マリ", score: 209},
	{name: "マラウイ", score: 196},
	{name: "チリ", score: 192},
	{name: "ルーマニア", score: 191},
	{name: "カザフスタン", score: 190},
	{name: "ザンビア", score: 189},
	{name: "シリア", score: 183},
	{name: "ガアテマラ", score: 182},
	{name: "エクアドル", score: 179},
	{name: "オランダ", score: 172},
	{name: "セネガル", score: 172},
	{name: "カンボジア", score: 169},
	{name: "チャド", score: 169},
	{name: "ソマリア", score: 164},
	{name: "ジンバブエ", score: 151},
	{name: "ギニア", score: 135},
	{name: "ルワンダ", score: 133},
	{name: "ベナン", score: 125},
	{name: "ブルンジ", score: 123},
	{name: "チュニジア", score: 119},
	{name: "ボリビア", score: 118},
	{name: "ベルギー", score: 116},
	{name: "ハイチ  ", score: 115},
	{name: "南スーダン", score: 114},
	{name: "キューバ", score: 113},
	{name: "ドミニカ共和国", score: 110},
	{name: "チェコ", score: 107},
	{name: "ギリシャ", score: 104},
	{name: "ヨルダン", score: 103},
	{name: "アゼルバイジャン", score: 102},
	{name: "ポルトガル", score: 102},
	{name: "スウェーデン", score: 102},
	{name: "ホンジュラス", score: 101},
	{name: "アラブ首長国連邦", score: 100},
	{name: "タジキスタン", score: 97},
	{name: "ハンガリー", score: 96},
	{name: "ベラルーシ", score: 94},
	{name: "パプアニューギニア", score: 91},
	{name: "オーストリア", score: 90},
	{name: "イスラエル", score: 88},
	{name: "セルビア", score: 87},
	{name: "スイス", score: 87},
	{name: "トーゴ", score: 85},
	{name: "シエラレオネ", score: 81},
	{name: "香港", score: 76},
	{name: "ラオス", score: 74},
	{name: "パラグアイ", score: 72},
	{name: "リビア", score: 70},
	{name: "ブルガリア", score: 69},
	{name: "レバノン", score: 68},
	{name: "ニカラグア", score: 67},
	{name: "キルギス", score: 66},
	{name: "エルサルバドル", score: 65},
	{name: "トルクメニスタン", score: 61},
	{name: "シンガポール", score: 59},
	{name: "デンマーク", score: 58},
	{name: "コンゴ共和国", score: 57},
	{name: "フィンランド", score: 55},
	{name: "ノルウェー", score: 55},
	{name: "スロバキア", score: 55},
	{name: "リベリア", score: 52},
	{name: "オマーン", score: 52},
	{name: "パレスチナ", score: 52},
	{name: "コスタリカ", score: 51},
	{name: "アイルランド", score: 50},
	{name: "中央アフリカ共和国", score: 49},
	{name: "ニュージーランド", score: 49},
	{name: "モーリタニア", score: 48},
	{name: "クウェート", score: 43},
	{name: "パナマ", score: 44},
	{name: "クウェート", score: 43},
	{name: "クロアチア", score: 41},
	{name: "ジョージア", score: 40},
	{name: "モルドバ", score: 40},
	{name: "エリトリア", score: 36},
	{name: "ウルグアイ", score: 35},
	{name: "ボスニア・ヘルツェゴビナ", score: 33},
	{name: "モンゴル", score: 33},
	{name: "アルメニア", score: 30},
	{name: "ジャマイカ", score: 30},
	{name: "アルバニア", score: 29},
	{name: "カタール", score: 29},
	{name: "プエルトリコ", score: 28},
	{name: "リトアニア", score: 27},
	{name: "ナミビア", score: 26},
	{name: "ガンビア", score: 25},
	{name: "ボツワナ", score: 24},
	{name: "ガボン", score: 23},
	{name: "レソト", score: 22},
	{name: "北マケドニア", score: 21},
	{name: "スロベニア", score: 21},
	{name: "ギニアビサウ", score: 20},
	{name: "ラトビア", score: 19},
	{name: "バーレーン", score: 17},
	{name: "赤道ギニア", score: 14},
	{name: "トリニダード・トバゴ", score: 14},
	{name: "エストニア", score: 13},
	{name: "モーリシャス", score: 13},
	{name: "東ティモール", score: 13},
	{name: "キプロス", score: 12},
	{name: "エスワティニ", score: 12},
	{name: "ジブチ", score: 10},
	{name: "コモロ", score: 9},
	{name: "フィジー", score: 9},
	{name: "レユニオン", score: 9},
	{name: "ブータン", score: 8},
	{name: "ガイアナ", score: 8},
	{name: "マカオ", score: 7},
	{name: "ソロモン諸島", score: 7},
	{name: "カーボベルデ", score: 6},
	{name: "ルクセンブルク", score: 6},
	{name: "モンテネグロ", score: 6},
	{name: "スリナム", score: 6},
	{name: "西サハラ", score: 6},
	{name: "モルディブ", score: 5},
	{name: "バハマ", score: 4},
	{name: "ベリーズ", score: 4},
	{name: "ブルネイ", score: 4},
	{name: "グアドループ", score: 4},
	{name: "マルタ", score: 4},
	{name: "マルティニーク", score: 4},
	{name: "バルバドス", score: 3},
	{name: "フランス領ギアナ", score: 3},
	{name: "フランス領ポリネシア", score: 3},
	{name: "アイスランド", score: 3},
	{name: "ニューカレドニア", score: 3},
	{name: "バヌアツ", score: 3},
	{name: "キュラソー", score: 2},
	{name: "グアム", score: 2},
	{name: "セントルシア", score: 2},
	{name: "サモア", score: 2},
	{name: "サントメ・プリンシペ", score: 2},
	{name: "アンティグア・バーブーダ", score: 1},
	{name: "アルバ", score: 1},
	{name: "ドミニカ国", score: 1},
	{name: "グレナダ", score: 1},
	{name: "キリバス", score: 1},
	{name: "ミクロネシア", score: 1},
	{name: "セントクリストファー・ネイビス", score: 1},
	{name: "セントビンセント・グレナディーン", score: 1},
	{name: "セーシェル", score: 1},
	{name: "トンガ", score: 1},
	{name: "アメリカ領ヴァージン諸島", score: 1},
];

/**
 * 海クラス生成時のパラメータ
 */
export interface SeaParameterObject {
	/**
	 * 親エンティティ
	 */
	readonly parent: g.E;
}

/**
 * 海クラス
 */
export class Sea {
	/**
	 * 釣られた魚リスト
	 */
	capturedFishList: Fish[];

	private _parent: g.E;

	/**
	 * 作成した魚リスト
	 */
	private _fishList: Fish[];

	/**
	 * 魚作成タイマー
	 */
	private _fishTimerIdentifier: g.TimerIdentifier;

	constructor(param: SeaParameterObject){
		this.capturedFishList = [];
		this._parent = param.parent;
		this._fishList = [];
	}

	/**
	 * 定期的に魚を作成する
	 */
	startFishTimer(): void {
		this._fishTimerIdentifier = this._parent.scene.setInterval(() => {
			const fish = this._createRandomFish(this._parent);
			fish.swim();
			this._fishList.push(fish);
		}, FISH_INTERVAL);
	}

	/**
	 * タイマーをクリアする
	 */
	clearFishTimer(): void {
		if (!this._fishTimerIdentifier) return;
		this._parent.scene.clearInterval(this._fishTimerIdentifier);
		this._fishTimerIdentifier = null;
	}

	/**
	 * 釣り針と魚の当たり判定をチェックする
	 */
	checkFishOnHook(fishingRod: FishingRod): void {
		if (!this._fishList.length) return;
		if (!fishingRod.isCatching) return;
		this._fishList.forEach(fish => {
			// 釣り針と魚が当たっていた場合は釣り上げる
			if (g.Collision.intersectAreas(fishingRod.hookArea, fish.area)) {
				if (fish.isCaptured) return;
				fish.stop();
				fish.followHook(fishingRod);
				this._fishList = this._fishList.filter(item => item !== fish);
				this.capturedFishList.push(fish);
			}
		});
	};

	/**
	 * 捕まえた魚たちを destroy する
	 */
	destroyCapturedFish(): void {
		this.capturedFishList.forEach(capturedFish => capturedFish.destroy());
		this.capturedFishList = [];
	}

	/**
	 * ランダムな魚を作成
	 */
	private _createRandomFish(parent: g.E): Fish {
		// 作成する魚の種類
		const fishIdx = g.game.random.get(0, fishInfoList.length - 1);
		// 魚の泳ぎ方のパターン
		const pattern = (g.game.random.get(0, 1)) ? "right_to_left" : "left_to_right";
		// 魚が泳ぐ水深
		const depth = WATERSURFACE_POS.y + FISH_FONT_SIZE * g.game.random.get(0, 4);
		// 魚が泳ぐ時間
		const swimTime = g.game.random.get(SWIMMING_TIME_RANGE.min, SWIMMING_TIME_RANGE.max);

		return new Fish({
			parent: parent,
			name: fishInfoList[fishIdx].name,
			score: fishInfoList[fishIdx].score,
			swimmingStyle: {
				pattern: pattern,
				depth: depth,
				swimTime: swimTime
			}
		});
	}
}
