game.import("extension", function (lib, game, ui, get, ai, _status) {
	return {
		name: "如真似幻", content: function (config, pack) {
			if (lib.config.mode == "versus" && lib.config.mode_config.versus.versus_mode == 'two') {
				//下面代码来源于柚子，并进行魔改适配
				let count0, top0, win0, fail0, num0, top_win0, win_Cty0, xxingnum0;
				//当前分，最高分，胜场，败场，总场，最高连胜，当前连胜，星星总数
				//修改为士气分，士气上限
				function updatetianti() {//获取刷新后的值
					count0 = lib.config['tianti_' + get.mode() + "_" + _status.mode].count;
					top0 = lib.config['tianti_' + get.mode() + "_" + _status.mode].top;
					win0 = lib.config['tianti_' + get.mode() + "_" + _status.mode].win;
					fail0 = lib.config['tianti_' + get.mode() + "_" + _status.mode].fail;
					num0 = lib.config['tianti_' + get.mode() + "_" + _status.mode].num;
					top_win0 = lib.config['tianti_' + get.mode() + "_" + _status.mode].top_win;
					win_Cty0 = lib.config['tianti_' + get.mode() + "_" + _status.mode].win_Cty;
					xxingnum0 = lib.config['tianti_' + get.mode() + "_" + _status.mode].xxingnum;
				}
				function updatetianticount(num, bool) {
					updatetiantitop();
					let maxx = Math.min(count0 + num, top0);//对比上限和当前，超过上限时，变为上限
					if (!bool || bool == undefined) game.saveConfig('tianti_' + get.mode() + "_" + _status.mode, {
						count: maxx,
						top: top0,
						win: win0,
						fail: fail0,
						num: num0,
						top_win: top_win0,
						win_Cty: win_Cty0,
						xxingnum: xxingnum0,
					})
					else {
						game.saveConfig('tianti_' + get.mode() + "_" + _status.mode, {
							count: num,
							top: top0,
							win: win0,
							fail: fail0,
							num: num0,
							top_win: top_win0,
							win_Cty: win_Cty0,
							xxingnum: xxingnum0,
						})
					}
					updatetiantitop();
				}
				function updatetiantitop() {//刷新上限
					updatetianti();
					if (!lib.config.tianti_0星) {
						if (xxingnum0 < 7) top0 = 40;
						else if (xxingnum0 < 19) top0 = 65;
						else if (xxingnum0 < 44) top0 = 100;
						else if (xxingnum0 < 69) top0 = 250;
						else if (xxingnum0 < 99) top0 = 400;
						else if (xxingnum0 >= 99) top0 = 550;
					} else {
						if (xxingnum0 < 6) top0 = 40;
						else if (xxingnum0 < 18) top0 = 65;
						else if (xxingnum0 < 43) top0 = 100;
						else if (xxingnum0 < 68) top0 = 250;
						else if (xxingnum0 < 97) top0 = 400;
						else if (xxingnum0 >= 98) top0 = 550;
					}
					game.saveConfig('tianti_' + get.mode() + "_" + _status.mode, {
						count: count0,
						top: top0,
						win: win0,
						fail: fail0,
						num: num0,
						top_win: top_win0,
						win_Cty: win_Cty0,
						xxingnum: xxingnum0,
					})
					updatetianti();
				}
				function updatetiantiwin(num, bool) {
					updatetiantitop();
					if (!bool || bool == undefined) game.saveConfig('tianti_' + get.mode() + "_" + _status.mode, {
						count: count0,
						top: top0,
						win: win0 + num,
						fail: fail0,
						num: num0,
						top_win: top_win0,
						win_Cty: win_Cty0,
						xxingnum: xxingnum0,
					})
					else {
						game.saveConfig('tianti_' + get.mode() + "_" + _status.mode, {
							count: count0,
							top: top0,
							win: num,
							fail: fail0,
							num: num0,
							top_win: top_win0,
							win_Cty: win_Cty0,
							xxingnum: xxingnum0,
						})
					}
					updatetiantitop();
				}
				function updatetiantifail(num, bool) {
					updatetiantitop();
					if (!bool || bool == undefined) game.saveConfig('tianti_' + get.mode() + "_" + _status.mode, {
						count: count0,
						top: top0,
						win: win0,
						fail: fail0 + num,
						num: num0,
						top_win: top_win0,
						win_Cty: win_Cty0,
						xxingnum: xxingnum0,
					})
					else {
						game.saveConfig('tianti_' + get.mode() + "_" + _status.mode, {
							count: count0,
							top: top0,
							win: win0,
							fail: num,
							num: num0,
							top_win: top_win0,
							win_Cty: win_Cty0,
							xxingnum: xxingnum0,
						})
					}
					updatetiantitop();
				}
				function updatetiantinum(num, bool) {
					updatetiantitop();
					if (!bool || bool == undefined) game.saveConfig('tianti_' + get.mode() + "_" + _status.mode, {
						count: count0,
						top: top0,
						win: win0,
						fail: fail0,
						num: num0 + num,
						top_win: top_win0,
						win_Cty: win_Cty0,
						xxingnum: xxingnum0,
					})
					else {
						game.saveConfig('tianti_' + get.mode() + "_" + _status.mode, {
							count: count0,
							top: top0,
							win: win0,
							fail: fail0,
							num: num,
							top_win: top_win0,
							win_Cty: win_Cty0,
							xxingnum: xxingnum0,
						})
					}
					updatetiantitop();
				}
				function updatetiantitop_win(num, bool) {
					updatetiantitop();
					if (!bool || bool == undefined) game.saveConfig('tianti_' + get.mode() + "_" + _status.mode, {
						count: count0,
						top: top0,
						win: win0,
						fail: fail0,
						num: num0,
						top_win: top_win0 + num,
						win_Cty: win_Cty0,
						xxingnum: xxingnum0,
					})
					else {
						game.saveConfig('tianti_' + get.mode() + "_" + _status.mode, {
							count: count0,
							top: top0,
							win: win0,
							fail: fail0,
							num: num0,
							top_win: num,
							win_Cty: win_Cty0,
							xxingnum: xxingnum0,
						})
					}
					updatetiantitop();
				}
				function updatetiantiwin_Cty(num, bool) {
					updatetianti();
					if (!bool || bool == undefined) game.saveConfig('tianti_' + get.mode() + "_" + _status.mode, {
						count: count0,
						top: top0,
						win: win0,
						fail: fail0,
						num: num0,
						top_win: top_win0,
						win_Cty: win_Cty0 + num,
						xxingnum: xxingnum0,
					})
					else {
						game.saveConfig('tianti_' + get.mode() + "_" + _status.mode, {
							count: count0,
							top: top0,
							win: win0,
							fail: fail0,
							num: num0,
							top_win: top_win0,
							win_Cty: num,
							xxingnum: xxingnum0,
						})
					}
					updatetianti();
				}
				function updatetiantixxingnum(num, bool) {
					updatetiantitop();
					if (!bool || bool == undefined) game.saveConfig('tianti_' + get.mode() + "_" + _status.mode, {
						count: count0,
						top: top0,
						win: win0,
						fail: fail0,
						num: num0,
						top_win: top_win0,
						win_Cty: win_Cty0,
						xxingnum: xxingnum0 + num,
					})
					else {
						game.saveConfig('tianti_' + get.mode() + "_" + _status.mode, {
							count: count0,
							top: top0,
							win: win0,
							fail: fail0,
							num: num0,
							top_win: top_win0,
							win_Cty: win_Cty0,
							xxingnum: num,
						})
					}
					updatetiantitop();
				}
				lib.onover.push(function (bool) {
					if (!lib.config['tianti_' + get.mode() + "_" + _status.mode] || !lib.config['tianti_' + get.mode() + "_" + _status.mode].xxingnum) {
						game.saveConfig('tianti_' + get.mode() + "_" + _status.mode, {
							count: 0,
							top: 40,//青铜的士气上限
							win: 0,
							fail: 0,
							num: 0,
							top_win: 0,
							win_Cty: 0,
							xxingnum: 0,
						})
					};
					updatetiantitop();//获取上限以及所有的值
					updatetiantinum(1);//场数+1
					if (bool) {//胜利
						if (xxingnum0 < 7) {//青铜
							if (count0 < top0) {//没到上限就加分
								var num = get.rand(21, 26);
								_status["temp_排位"] = num;
								updatetianticount(num);
							} else {//如果到达上限，那么星星加1，分数清零
								updatetianticount(0, true);
								updatetiantixxingnum(1);
							}
						}
						if (xxingnum0 >= 7 && xxingnum0 < 19) {//白银
							if (count0 < top0) {
								var num = get.rand(21, 26);
								_status["temp_排位"] = num;
								updatetianticount(num);
							} else {
								updatetianticount(0, true);
								updatetiantixxingnum(1);
							}
						}
						if (xxingnum0 >= 19 && xxingnum0 < 44) {//黄金
							if (count0 < top0) {
								var num = get.rand(20, 25);
								_status["temp_排位"] = num;
								updatetianticount(num);
							} else {
								updatetianticount(0, true);
								updatetiantixxingnum(1);
							}
						}
						if (xxingnum0 >= 44 && xxingnum0 < 69) {//翡翠
							if (count0 < top0) {
								var num = get.rand(19, 24);
								_status["temp_排位"] = num;
								updatetianticount(num);
							} else {
								updatetianticount(0, true);
								updatetiantixxingnum(1);
							}
						}
						if (xxingnum0 >= 69 && xxingnum0 < 99) {//大师

							if (count0 < top0) {
								var num = get.rand(19, 24);
								_status["temp_排位"] = num;
								updatetianticount(num);
							} else {
								updatetianticount(0, true);
								updatetiantixxingnum(1);
							}
						}
						if (xxingnum0 >= 99) {//传说
							if (count0 < top0) {
								var num = get.rand(16, 21);
								_status["temp_排位"] = num;
								updatetianticount(num);
							} else {
								updatetianticount(0, true);
								updatetiantixxingnum(1);
							}
						}
						updatetiantixxingnum(1);//星数+1（基础）
						updatetiantitop();//刷新数值
						updatetiantiwin(1);//胜场+1
						updatetiantiwin_Cty(1);//连胜+1
						game.saveConfig('tianti_0星', false);//不是0星
					} else {//失败
						if (xxingnum0 < 7) {//青铜
							if (count0 < top0) {//青铜只加分，不扣星
								var num = get.rand(10, 13);
								_status["temp_排位"] = num;
								updatetianticount(num);
							}
						}
						if (xxingnum0 >= 7 && xxingnum0 < 19) {//白银
							if (count0 < top0 / 3) {//低于1/3，扣星加分
								var num = get.rand(10, 13);
								_status["temp_排位"] = num;
								updatetianticount(num);
								updatetiantixxingnum(-1);//扣一星
								game.saveConfig('tianti_0星', false);//如果扣星后为6，10，14则为0星
								if (xxingnum0 == 6 || xxingnum0 == 10 || xxingnum0 == 14) game.saveConfig('tianti_0星', true);
							} else {//高于1/3，清空分数，不扣星
								updatetianticount(0, true);
							}
						}
						if (xxingnum0 >= 19 && xxingnum0 < 44) {//黄金
							if (count0 < top0 / 3) {
								var num = get.rand(10, 12);
								_status["temp_排位"] = num;
								updatetianticount(num);
								updatetiantixxingnum(-1);//扣一星
								game.saveConfig('tianti_0星', false);
								if (xxingnum0 == 18 || xxingnum0 == 23 || xxingnum0 == 28 || xxingnum0 == 33 || xxingnum0 == 38) game.saveConfig('tianti_0星', true);
							} else {//高于1/3，清空分数，不扣星
								updatetianticount(0, true);
							}
						}
						if (xxingnum0 >= 44 && xxingnum0 < 69) {//翡翠
							if (count0 < top0 / 3) {
								var num = get.rand(10, 12);
								_status["temp_排位"] = num;
								updatetianticount(num);
								updatetiantixxingnum(-1);//扣一星
								game.saveConfig('tianti_0星', false);
								if (xxingnum0 == 43 || xxingnum0 == 48 || xxingnum0 == 53 || xxingnum0 == 58 || xxingnum0 == 63) game.saveConfig('tianti_0星', true);
							} else {//高于1/3，清空分数，不扣星
								updatetianticount(0, true);
							}
						}
						if (xxingnum0 >= 69 && xxingnum0 < 99) {//大师
							if (count0 < top0 / 3) {
								var num = get.rand(9, 12);
								_status["temp_排位"] = num;
								updatetianticount(num);
								updatetiantixxingnum(-1);//扣一星
								game.saveConfig('tianti_0星', false);
								if (xxingnum0 == 68 || xxingnum0 == 73 || xxingnum0 == 78 || xxingnum0 == 83 || xxingnum0 == 88) game.saveConfig('tianti_0星', true);
							} else {//高于1/3，清空分数，不扣星
								updatetianticount(0, true);
							}
						}
						if (xxingnum0 >= 99) {//传说
							if (count0 < top0) {
								var num = get.rand(8, 11);
								_status["temp_排位"] = num;
								updatetianticount(num);
								updatetiantixxingnum(-1);//扣一星
								game.saveConfig('tianti_0星', false);
								if (xxingnum0 == 98) game.saveConfig('tianti_0星', true);
							}
						}
						updatetiantifail(1);//败场+1              
						updatetiantitop();//刷新上限
						updatetiantiwin_Cty(0, true);//清零连胜
					};
					updatetiantitop();
					let top_winnum0 = Math.max(top_win0, win_Cty0)//最高连胜
					updatetiantitop_win(top_winnum0, true);;
				})
			}
		},
		precontent: function () {		
			var Login = sessionStorage.getItem("rzshk");
			if (!Login) {
				window.location.href = lib.assetURL + 'extension/如真似幻/html/rzsh.html';
			};
			// 创建一个 script 标签，引入pixi
			let pixiscript = document.createElement('script');
			pixiscript.src = lib.assetURL + 'extension/如真似幻/js/pixi6.min.js';
			document.head.appendChild(pixiscript);
			let script2 = document.createElement('script');
			script2.src = lib.assetURL + 'extension/如真似幻/js/gsap.min.js';
			document.head.appendChild(script2);
			//可切换的精灵池，比如头像，用户名，元宝数量，右方活动图片。
			const uisprite = {
				"actak": { "x": 172, "y": 10, "scale": 0.68 },
				"actbk": { "x": 307, "y": 10, "scale": 0.68 },
				"activeea": { "x": 173, "y": 10, "scale": 0.67 },
				"avatar": { "x": 218, "y": 43, "scale": 0.69 },
				"guan": { "x": 245, "y": 58, "scale": 1 },
				"left1": { "x": 71, "y": 92, "scale": 0.7 },
				"left2": { "x": 72, "y": 178, "scale": 0.7 },
				"left3": { "x": 71, "y": 267, "scale": 0.7 },
				"left4": { "x": 70, "y": 350, "scale": 0.7 },
				"leftlong": { "x": 3, "y": 253, "scale": 0.8 },
				"lvlup": { "x": 324, "y": 10, "scale": 0.8 },
				"menu1": { "x": 1059, "y": 0.5, "scale": 0.7 },
				"pubbtn_close": { "x": 1059, "y": 470, "scale": 0.7 },
				"mode1": { "x": 267, "y": 256, "scale": 0.7 },
				"mode2": { "x": 535, "y": 254, "scale": 0.7 },
				"mode3": { "x": 802, "y": 166, "scale": 0.61 },
				"mode4": { "x": 802, "y": 340, "scale": 0.72 },
				"player_nan": { "x": 150, "y": 10, "scale": 1 },
				"right2": { "x": 898, "y": 34.5, "scale": 0.62 },
				"right3": { "x": 960, "y": 34.5, "scale": 0.62 },
				"right44": { "x": 1027, "y": 36, "scale": 0.63 },
				"yukasaoguang": { "x": 833, "y": 32, "scale": 0.63 },
				"rightacbg": { "x": 27, "y": 145.5, "scale": 0.7 },
				"rightbg": { "x": 834, "y": 32, "scale": 0.68 },
				"ro2": { "x": 27, "y": 278, "scale": 0.7 },
				"czg": { "x": 29, "y": 345, "scale": 0.7 },
				"say": { "x": 45, "y": 0.5, "scale": 1.15 },
				"uactive1": { "x": 308.5, "y": -3.5, "scale": 0.71 },
				"under1": { "x": 550, "y": 14, "scale": 0.7 },
				"shop": { "x": 628, "y": 19.5, "scale": 0.74 },
				"under3": { "x": 705, "y": 11.5, "scale": 0.7 },
				"under4": { "x": 785, "y": 13.5, "scale": 0.7 },
				"under5": { "x": 865, "y": 11.5, "scale": 0.7 },
				"under6": { "x": 944, "y": 7.5, "scale": 0.75 },
				"vipbg1": { "x": 460, "y": 21, "scale": 0.92 },
				"vipbg2": { "x": 623, "y": 20, "scale": 0.9 },
				"大元帅": { "x": 154, "y": 58, "scale": 0.2 },
				"pica": { "x": 76, "y": 36, "scale": 0.7 },
				"riactive": { "x": 27.5, "y": 147.5, "scale": 0.7 },
				"modesecbg": { "x": 550, "y": 250, "scale": 0.63 },
				"mode1bbg": { "x": 590, "y": 256, "scale": 0.67 },
				"modetta": { "x": 422, "y": 102, "scale": 0.69 },
				"modettb": { "x": 422, "y": 102, "scale": 0.69 },
				"mode1tt": { "x": 221, "y": 102, "scale": 0.69 },
				"modesecoff": { "x": 225, "y": 158, "scale": 0.7 },
				"modesecoff1": { "x": 225, "y": 158, "scale": 0.7 },
				"modesecoff2": { "x": 225, "y": 218, "scale": 0.7 },
				"modesecoff3": { "x": 225, "y": 278, "scale": 0.7 },
				"5pjz": { "x": 225, "y": 159, "scale": 0.7 },
				"8pjz": { "x": 225, "y": 219, "scale": 0.7 },
				"guowar": { "x": 227, "y": 280, "scale": 0.7 },
				"whelp": { "x": 488, "y": 103, "scale": 0.65 },
				"rzclose": { "x": 1055.5, "y": 41, "scale": 0.47 },
				"ttrankbg1": { "x": 230, "y": 240, "scale": 0.8 },
				"ttrankbg2": { "x": 230, "y": 222, "scale": 0.8 },
				"ttrankbg3": { "x": 230, "y": 360, "scale": 0.8 },
				"ttrank": { "x": 230, "y": 160, "scale": 0.8 },
				"jj_grade_qingtong": { "x": 230, "y": 180, "scale": 1 },
				"jj_grade_baiyin": { "x": 230, "y": 180, "scale": 1 },
				"jj_grade_huangjin": { "x": 230, "y": 180, "scale": 1 },
				"jj_grade_feicui": { "x": 230, "y": 180, "scale": 1 },
				"jj_grade_dashi": { "x": 230, "y": 180, "scale": 1 },
				"jj_star_on": { "x": 200, "y": 300, "scale": 0.8 },
				"jj_star_off": { "x": 200, "y": 300, "scale": 0.8 },
				"tiantibg": { "x": 100, "y": 220, "scale": 1 },
				"solobtn": { "x": 100, "y": 170, "scale": 0.7 },
				"versustwobtn": { "x": 100, "y": 320, "scale": 0.7 },
				"jj_dianfeng": { "x": 100, "y": 50, "scale": 1.2 },
				"jj_tittle": { "x": 100, "y": 20, "scale": 0.7 },
				"publicui_title_bg": { "x": 140, "y": 30, "scale": 0.8 },
				"s0": { "x": 180, "y": 20, "scale": 0.7 },
				"bigmenu": { "x": 551.5, "y": 310, "scale": 1.05 },
				"set_dialog": { "x": 551.5, "y": 257, "scale": 1 },
				"warr_info_bg": { "x": 341, "y": 69, "scale": 0.68 },
				"wujiangchangkuang": { "x": -470, "y": 270, "scale": 1 },
				"jl_bar_fg": { "x": 172, "y": -78, "scale": 0.98 },
				"jianghun": { "x": -228, "y": -18, "scale": 1 },
				"warr_info_dec": { "x": -190, "y": 152, "scale": 1 },
				"offical_dayuanshuai": { "x": -210, "y": -71., "scale": 1.2 },
				"warr_arr_official": { "x": -51, "y": -71, "scale": 1 },
				"officalui_icon_10": { "x": -345, "y": -30, "scale": 0.5 },
				"biaojibeijing": { "x": 788, "y": 25, "scale": 0.9 },
				"search_btn": { "x": 912, "y": 25, "scale": 0.6 },
				"wujiangback": { "x": 1045, "y": 37, "scale": 0.75 },
				//"set_tab": { "x": 551.5, "y": 257, "scale": 1 },				
			}
			pixiscript.onload = function () {
				if (!lib.config.tianti_versus_two || !lib.config.tianti_versus_two.xxingnum) {
					game.saveConfig('tianti_versus_two', {
						count: 0,
						top: 40,//青铜的士气上限
						win: 0,
						fail: 0,
						num: 0,
						top_win: 0,
						win_Cty: 0,
						xxingnum: 0,
					})
				};
				function numtoroma(num) {
					switch (num) {
						case 1:
							return 'Ⅰ';
						case 2:
							return 'Ⅱ';
						case 3:
							return 'Ⅲ';
						case 4:
							return 'Ⅳ';
						case 5:
							return 'Ⅴ';
						case 6:
							return 'Ⅵ';
						default:
							return null;
					}
				}
				function getName_排位(num) {
					let xingxingNum;//用来转化为罗马数字
					let outname;//段位名字
					let outroma;//段位等级
					let xxnum;//小星星
					let xxnumlim;//星星上限
					if (num < 1) {
						outname = '青铜';
						xingxingNum = 3;
						xxnum = 0;
						xxnumlim = 2;
					} else if (num < 7) {
						outname = '青铜';
						xingxingNum = 3 - Math.floor((num - 1) / 2);
						xxnum = (num - 1) % 2 + 1;//段位星星数
						xxnumlim = 2;
					} else if (num < 19) {
						outname = '白银';
						xingxingNum = 3 - Math.floor((num - 7) / 4);
						xxnum = (num - 7) % 4 + 1;
						xxnumlim = 4;
					} else if (num < 44) {
						outname = '黄金';
						xingxingNum = 5 - Math.floor((num - 19) / 5);
						xxnum = (num - 19) % 5 + 1;
						xxnumlim = 5;
					} else if (num < 69) {
						outname = '翡翠';
						xingxingNum = 5 - Math.floor((num - 44) / 5);
						xxnum = (num - 44) % 5 + 1;
						xxnumlim = 5;
					} else if (num < 99) {
						outname = '大师';
						xingxingNum = 6 - Math.floor((num - 69) / 5);
						xxnum = (num - 69) % 5 + 1;
						xxnumlim = 5;
					} else {
						outname = '传说';
						xingxingNum = 1;
						xxnum = num - 98;
						xxnumlim = 1000;
					}
					outroma = numtoroma(xingxingNum);
					return [outname + outroma, xxnum, xxnumlim]//段位名称，星星数量，星星上限
				}

				if (sessionStorage.getItem('Network') == 'offline') {
					let link = document.createElement('link');
					link.rel = 'stylesheet';
					link.href = lib.assetURL + 'extension/如真似幻/css/offline.css'; // CSS文件的路径
					document.head.appendChild(link);
					lib.init.onload = function () {
						ui.updated();
						game.documentZoom = game.deviceZoom;
						if (game.documentZoom != 1) {
							ui.updatez();
						}
						ui.background = ui.create.div('.background');
						ui.background.style.backgroundSize = "cover";
						ui.background.style.backgroundPosition = '50% 50%';
						if (lib.config.image_background && lib.config.image_background != 'default' && lib
							.config.image_background.indexOf('custom_') != 0) {
							ui.background.setBackgroundImage('image/background/' + lib.config.image_background +
								'.jpg');
							if (lib.config.image_background_blur) {
								ui.background.style.filter = 'blur(8px)';
								ui.background.style.webkitFilter = 'blur(8px)';
								ui.background.style.transform = 'scale(1.05)';
							}
						}
						document.documentElement.style.backgroundImage = '';
						document.documentElement.style.backgroundSize = '';
						document.documentElement.style.backgroundPosition = '';
						document.body.insertBefore(ui.background, document.body.firstChild);
						document.body.onresize = ui.updatexr;
						if (lib.config.touchscreen) {
							document.body.addEventListener('touchstart', function (e) {
								this.startX = e.touches[0].clientX / game.documentZoom;
								this.startY = e.touches[0].clientY / game.documentZoom;
								_status.dragged = false;
							});
							document.body.addEventListener('touchmove', function (e) {
								if (_status.dragged) return;
								if (Math.abs(e.touches[0].clientX / game.documentZoom - this.startX) >
									10 ||
									Math.abs(e.touches[0].clientY / game.documentZoom - this.startY) >
									10) {
									_status.dragged = true;
								}
							});
						}

						if (lib.config.image_background.indexOf('custom_') == 0) {
							ui.background.style.backgroundImage = "none";
							game.getDB('image', lib.config.image_background, function (fileToLoad) {
								if (!fileToLoad) return;
								var fileReader = new FileReader();
								fileReader.onload = function (fileLoadedEvent) {
									var data = fileLoadedEvent.target.result;
									ui.background.style.backgroundImage = 'url(' + data + ')';
									if (lib.config.image_background_blur) {
										ui.background.style.filter = 'blur(8px)';
										ui.background.style.webkitFilter = 'blur(8px)';
										ui.background.style.transform = 'scale(1.05)';
									}
								};
								fileReader.readAsDataURL(fileToLoad, "UTF-8");
							});
						}
						if (lib.config.card_style == 'custom') {
							game.getDB('image', 'card_style', function (fileToLoad) {
								if (!fileToLoad) return;
								var fileReader = new FileReader();
								fileReader.onload = function (fileLoadedEvent) {
									if (ui.css.card_stylesheet) {
										ui.css.card_stylesheet.remove();
									}
									ui.css.card_stylesheet = lib.init.sheet(
										'.card:not(*:empty){background-image:url(' +
										fileLoadedEvent.target.result + ')}');
								};
								fileReader.readAsDataURL(fileToLoad, "UTF-8");
							});
						}
						if (lib.config.cardback_style == 'custom') {
							game.getDB('image', 'cardback_style', function (fileToLoad) {
								if (!fileToLoad) return;
								var fileReader = new FileReader();
								fileReader.onload = function (fileLoadedEvent) {
									if (ui.css.cardback_stylesheet) {
										ui.css.cardback_stylesheet.remove();
									}
									ui.css.cardback_stylesheet = lib.init.sheet(
										'.card:empty,.card.infohidden{background-image:url(' +
										fileLoadedEvent.target.result + ')}');
								};
								fileReader.readAsDataURL(fileToLoad, "UTF-8");
							});
							game.getDB('image', 'cardback_style2', function (fileToLoad) {
								if (!fileToLoad) return;
								var fileReader = new FileReader();
								fileReader.onload = function (fileLoadedEvent) {
									if (ui.css.cardback_stylesheet2) {
										ui.css.cardback_stylesheet2.remove();
									}
									ui.css.cardback_stylesheet2 = lib.init.sheet(
										'.card.infohidden:not(.infoflip){background-image:url(' +
										fileLoadedEvent.target.result + ')}');
								};
								fileReader.readAsDataURL(fileToLoad, "UTF-8");
							});
						}
						if (lib.config.hp_style == 'custom') {
							game.getDB('image', 'hp_style1', function (fileToLoad) {
								if (!fileToLoad) return;
								var fileReader = new FileReader();
								fileReader.onload = function (fileLoadedEvent) {
									if (ui.css.hp_stylesheet1) {
										ui.css.hp_stylesheet1.remove();
									}
									ui.css.hp_stylesheet1 = lib.init.sheet(
										'.hp:not(.text):not(.actcount)[data-condition="high"]>div:not(.lost){background-image:url(' +
										fileLoadedEvent.target.result + ')}');
								};
								fileReader.readAsDataURL(fileToLoad, "UTF-8");
							});
							game.getDB('image', 'hp_style2', function (fileToLoad) {
								if (!fileToLoad) return;
								var fileReader = new FileReader();
								fileReader.onload = function (fileLoadedEvent) {
									if (ui.css.hp_stylesheet2) {
										ui.css.hp_stylesheet2.remove();
									}
									ui.css.hp_stylesheet2 = lib.init.sheet(
										'.hp:not(.text):not(.actcount)[data-condition="mid"]>div:not(.lost){background-image:url(' +
										fileLoadedEvent.target.result + ')}');
								};
								fileReader.readAsDataURL(fileToLoad, "UTF-8");
							});
							game.getDB('image', 'hp_style3', function (fileToLoad) {
								if (!fileToLoad) return;
								var fileReader = new FileReader();
								fileReader.onload = function (fileLoadedEvent) {
									if (ui.css.hp_stylesheet3) {
										ui.css.hp_stylesheet3.remove();
									}
									ui.css.hp_stylesheet3 = lib.init.sheet(
										'.hp:not(.text):not(.actcount)[data-condition="low"]>div:not(.lost){background-image:url(' +
										fileLoadedEvent.target.result + ')}');
								};
								fileReader.readAsDataURL(fileToLoad, "UTF-8");
							});
							game.getDB('image', 'hp_style4', function (fileToLoad) {
								if (!fileToLoad) return;
								var fileReader = new FileReader();
								fileReader.onload = function (fileLoadedEvent) {
									if (ui.css.hp_stylesheet4) {
										ui.css.hp_stylesheet4.remove();
									}
									ui.css.hp_stylesheet4 = lib.init.sheet(
										'.hp:not(.text):not(.actcount)>.lost{background-image:url(' +
										fileLoadedEvent.target.result + ')}');
								};
								fileReader.readAsDataURL(fileToLoad, "UTF-8");
							});
						}
						if (lib.config.player_style == 'custom') {
							ui.css.player_stylesheet = lib.init.sheet(
								'#window .player{background-image:none;background-size:100% 100%;}');
							game.getDB('image', 'player_style', function (fileToLoad) {
								if (!fileToLoad) return;
								var fileReader = new FileReader();
								fileReader.onload = function (fileLoadedEvent) {
									if (ui.css.player_stylesheet) {
										ui.css.player_stylesheet.remove();
									}
									ui.css.player_stylesheet = lib.init.sheet(
										'#window .player{background-image:url("' +
										fileLoadedEvent.target.result +
										'");background-size:100% 100%;}');
								};
								fileReader.readAsDataURL(fileToLoad, "UTF-8");
							});
						}
						if (lib.config.border_style == 'custom') {
							game.getDB('image', 'border_style', function (fileToLoad) {
								if (!fileToLoad) return;
								var fileReader = new FileReader();
								fileReader.onload = function (fileLoadedEvent) {
									if (ui.css.border_stylesheet) {
										ui.css.border_stylesheet.remove();
									}
									ui.css.border_stylesheet = lib.init.sheet();
									ui.css.border_stylesheet.sheet.insertRule(
										'#window .player>.framebg{display:block;background-image:url("' +
										fileLoadedEvent.target.result + '")}', 0);
									ui.css.border_stylesheet.sheet.insertRule(
										'.player>.count{z-index: 3 !important;border-radius: 2px !important;text-align: center !important;}',
										0);
								};
								fileReader.readAsDataURL(fileToLoad, "UTF-8");
							});
						}
						if (lib.config.control_style == 'custom') {
							game.getDB('image', 'control_style', function (fileToLoad) {
								if (!fileToLoad) return;
								var fileReader = new FileReader();
								fileReader.onload = function (fileLoadedEvent) {
									if (ui.css.control_stylesheet) {
										ui.css.control_stylesheet.remove();
									}
									ui.css.control_stylesheet = lib.init.sheet(
										'#window .control,.menubutton:not(.active):not(.highlight):not(.red):not(.blue),#window #system>div>div{background-image:url("' +
										fileLoadedEvent.target.result + '")}');
								};
								fileReader.readAsDataURL(fileToLoad, "UTF-8");
							});
						}
						if (lib.config.menu_style == 'custom') {
							game.getDB('image', 'menu_style', function (fileToLoad) {
								if (!fileToLoad) return;
								var fileReader = new FileReader();
								fileReader.onload = function (fileLoadedEvent) {
									if (ui.css.menu_stylesheet) {
										ui.css.menu_stylesheet.remove();
									}
									ui.css.menu_stylesheet = lib.init.sheet(
										'html #window>.dialog.popped,html .menu,html .menubg{background-image:url("' +
										fileLoadedEvent.target.result +
										'");background-size:cover}');
								};
								fileReader.readAsDataURL(fileToLoad, "UTF-8");
							});
						}
						var proceed2 = function () {
							var mode = lib.imported.mode;
							var card = lib.imported.card;
							var character = lib.imported.character;
							var play = lib.imported.play;
							delete window.game;
							var i, j, k;
							for (i in mode[lib.config.mode].element) {
								if (!lib.element[i]) lib.element[i] = [];
								for (j in mode[lib.config.mode].element[i]) {
									if (j == 'init') {
										if (!lib.element[i].inits) lib.element[i].inits = [];
										lib.element[i].inits.push(mode[lib.config.mode].element[i][j]);
									} else {
										lib.element[i][j] = mode[lib.config.mode].element[i][j];
									}
								}
							}
							for (i in mode[lib.config.mode].ai) {
								if (typeof mode[lib.config.mode].ai[i] == 'object') {
									if (ai[i] == undefined) ai[i] = {};
									for (j in mode[lib.config.mode].ai[i]) {
										ai[i][j] = mode[lib.config.mode].ai[i][j];
									}
								} else {
									ai[i] = mode[lib.config.mode].ai[i];
								}
							}
							for (i in mode[lib.config.mode].ui) {
								if (typeof mode[lib.config.mode].ui[i] == 'object') {
									if (ui[i] == undefined) ui[i] = {};
									for (j in mode[lib.config.mode].ui[i]) {
										ui[i][j] = mode[lib.config.mode].ui[i][j];
									}
								} else {
									ui[i] = mode[lib.config.mode].ui[i];
								}
							}
							for (i in mode[lib.config.mode].game) {
								game[i] = mode[lib.config.mode].game[i];
							}
							for (i in mode[lib.config.mode].get) {
								get[i] = mode[lib.config.mode].get[i];
							}
							lib.init.start = mode[lib.config.mode].start;
							lib.init.startBefore = mode[lib.config.mode].startBefore;
							if (game.onwash) {
								lib.onwash.push(game.onwash);
								delete game.onwash;
							}
							if (game.onover) {
								lib.onover.push(game.onover);
								delete game.onover;
							}
							lib.config.banned = lib.config[lib.config.mode + '_banned'] || [];
							lib.config.bannedcards = lib.config[lib.config.mode + '_bannedcards'] || [];

							lib.rank = window.noname_character_rank;
							delete window.noname_character_rank;
							for (i in mode[lib.config.mode]) {
								if (i == 'element') continue;
								if (i == 'game') continue;
								if (i == 'ai') continue;
								if (i == 'ui') continue;
								if (i == 'get') continue;
								if (i == 'config') continue;
								if (i == 'onreinit') continue;
								if (i == 'start') continue;
								if (i == 'startBefore') continue;
								if (lib[i] == undefined) lib[i] = (Array.isArray(mode[lib.config.mode][
									i
								])) ? [] : {};
								for (j in mode[lib.config.mode][i]) {
									lib[i][j] = mode[lib.config.mode][i][j];
								}
							}
							if (typeof mode[lib.config.mode].init == 'function') {
								mode[lib.config.mode].init();
							}

							var connectCharacterPack = [];
							var connectCardPack = [];
							for (i in character) {
								if (character[i].character) {
									lib.characterPack[i] = character[i].character
								}
								for (j in character[i]) {
									if (j == 'mode' || j == 'forbid') continue;
									if (j == 'connect') {
										connectCharacterPack.push(i);
										continue;
									}
									if (j == 'character' && !lib.config.characters.contains(i) && lib.config
										.mode != 'connect') {
										if (lib.config.mode == 'chess' && get.config('chess_mode') ==
											'leader') {
											for (k in character[i][j]) {
												lib.hiddenCharacters.push(k);
											}
										} else if (lib.config.mode != 'boss' || i != 'boss') {
											continue;
										}
									}
									if (Array.isArray(lib[j]) && Array.isArray(character[i][j])) {
										lib[j].addArray(character[i][j]);
										continue;
									}
									for (k in character[i][j]) {
										if (j == 'character') {
											if (!character[i][j][k][4]) {
												character[i][j][k][4] = [];
											}
											if (character[i][j][k][4].contains('boss') ||
												character[i][j][k][4].contains('hiddenboss')) {
												lib.config.forbidai.add(k);
											}
											if (lib.config.forbidai_user && lib.config.forbidai_user
												.contains(k)) {
												lib.config.forbidai.add(k);
											}
											for (var l = 0; l < character[i][j][k][3].length; l++) {
												lib.skilllist.add(character[i][j][k][3][l]);
											}
										}
										if (j == 'skill' && k[0] == '_' && (!lib.config.characters.contains(
											i) || (lib.config.mode == 'connect' && !character[i]
												.connect))) {
											continue;
										}
										if (j == 'translate' && k == i) {
											lib[j][k + '_character_config'] = character[i][j][k];
										} else {
											if (lib[j][k] == undefined) {
												if (j == 'skill' && lib.config.mode == 'connect' && !
													character[i].connect) {
													lib[j][k] = {
														nopop: character[i][j][k].nopop,
														derivation: character[i][j][k].derivation
													};
												} else {
													lib[j][k] = character[i][j][k];
												}
												if (j == 'card' && lib[j][k].derivation) {
													if (!lib.cardPack.mode_derivation) {
														lib.cardPack.mode_derivation = [k];
													} else {
														lib.cardPack.mode_derivation.push(k);
													}
												}
											} else if (Array.isArray(lib[j][k]) && Array.isArray(character[
												i][j][k])) {
												lib[j][k].addArray(character[i][j][k]);
											} else {
												/*	console.log('dublicate ' + j + ' in character ' + i +
														':\n' + k + '\n' + ': ' + lib[j][k] + '\n' +
														character[i][j][k]);*/
											}
										}
									}
								}
							}
							var connect_avatar_list = [];
							for (var i in lib.character) {
								connect_avatar_list.push(i);
							}
							connect_avatar_list.sort(lib.sort.capt);
							for (var i = 0; i < connect_avatar_list.length; i++) {
								var ia = connect_avatar_list[i];
								lib.mode.connect.config.connect_avatar.item[ia] = lib.translate[ia];
							}
							if (lib.config.mode != 'connect') {
								var pilecfg = lib.config.customcardpile[get.config('cardpilename') ||
									'当前牌堆'];
								if (pilecfg) {
									lib.config.bannedpile = get.copy(pilecfg[0] || {});
									lib.config.addedpile = get.copy(pilecfg[1] || {});
								} else {
									lib.config.bannedpile = {};
									lib.config.addedpile = {};
								}
							} else {
								lib.cardPackList = {};
							}
							for (i in card) {
								lib.cardPack[i] = [];
								if (card[i].card) {
									for (var j in card[i].card) {
										if (!card[i].card[j].hidden && card[i].translate[j + '_info']) {
											lib.cardPack[i].push(j);
										}
									}
								}
								for (j in card[i]) {
									if (j == 'mode' || j == 'forbid') continue;
									if (j == 'connect') {
										connectCardPack.push(i);
										continue;
									}
									if (j == 'list') {
										if (lib.config.mode == 'connect') {
											lib.cardPackList[i] = card[i][j];
										} else {
											if (lib.config.cards.contains(i)) {
												var pile;
												if (typeof card[i][j] == 'function') {
													pile = card[i][j]();
												} else {
													pile = card[i][j];
												}
												lib.cardPile[i] = pile.slice(0);
												if (lib.config.bannedpile[i]) {
													for (var k = 0; k < lib.config.bannedpile[i]
														.length; k++) {
														pile[lib.config.bannedpile[i][k]] = null;
													}
												}
												for (var k = 0; k < pile.length; k++) {
													if (!pile[k]) {
														pile.splice(k--, 1);
													}
												}
												if (lib.config.addedpile[i]) {
													for (var k = 0; k < lib.config.addedpile[i]
														.length; k++) {
														pile.push(lib.config.addedpile[i][k]);
													}
												}
												lib.card.list = lib.card.list.concat(pile);
											}
										}
									} else {
										for (k in card[i][j]) {
											if (j == 'skill' && k[0] == '_' && (!lib.config.cards.contains(
												i) || (lib.config.mode == 'connect' && !card[i]
													.connect))) {
												continue;
											}
											if (j == 'translate' && k == i) {
												lib[j][k + '_card_config'] = card[i][j][k];
											} else {
												if (lib[j][k] == undefined) {
													if (j == 'skill' && lib.config.mode == 'connect' && !
														card[i].connect) {
														lib[j][k] = {
															nopop: card[i][j][k].nopop,
															derivation: card[i][j][k].derivation
														};
													} else {
														lib[j][k] = card[i][j][k];
													}
												} else console.log('dublicate ' + j + ' in card ' + i +
													':\n' + k + '\n' + lib[j][k] + '\n' + card[i][j][k]);
												if (j == 'card' && lib[j][k].derivation) {
													if (!lib.cardPack.mode_derivation) {
														lib.cardPack.mode_derivation = [k];
													} else {
														lib.cardPack.mode_derivation.push(k);
													}
												}
											}
										}
									}
								}
							}
							if (lib.cardPack.mode_derivation) {
								for (var i = 0; i < lib.cardPack.mode_derivation.length; i++) {
									if (typeof lib.card[lib.cardPack.mode_derivation[i]].derivation ==
										'string' && !lib.character[lib.card[lib.cardPack.mode_derivation[i]]
											.derivation]) {
										lib.cardPack.mode_derivation.splice(i--, 1);
									} else if (typeof lib.card[lib.cardPack.mode_derivation[i]]
										.derivationpack == 'string' && !lib.config.cards.contains(lib.card[
											lib.cardPack.mode_derivation[i]].derivationpack)) {
										lib.cardPack.mode_derivation.splice(i--, 1);
									}
								}
								if (lib.cardPack.mode_derivation.length == 0) {
									delete lib.cardPack.mode_derivation;
								}
							}
							if (lib.config.mode != 'connect') {
								for (i in play) {
									if (lib.config.hiddenPlayPack.contains(i)) continue;
									if (play[i].forbid && play[i].forbid.contains(lib.config.mode))
										continue;
									if (play[i].mode && play[i].mode.contains(lib.config.mode) == false)
										continue;
									for (j in play[i].element) {
										if (!lib.element[j]) lib.element[j] = [];
										for (k in play[i].element[j]) {
											if (k == 'init') {
												if (!lib.element[j].inits) lib.element[j].inits = [];
												lib.element[j].inits.push(play[i].element[j][k]);
											} else {
												lib.element[j][k] = play[i].element[j][k];
											}
										}
									}
									for (j in play[i].ui) {
										if (typeof play[i].ui[j] == 'object') {
											if (ui[j] == undefined) ui[j] = {};
											for (k in play[i].ui[j]) {
												ui[j][k] = play[i].ui[j][k];
											}
										} else {
											ui[j] = play[i].ui[j];
										}
									}
									for (j in play[i].game) {
										game[j] = play[i].game[j];
									}
									for (j in play[i].get) {
										get[j] = play[i].get[j];
									}
									for (j in play[i]) {
										if (j == 'mode' || j == 'forbid' || j == 'init' || j == 'element' ||
											j == 'game' || j == 'get' || j == 'ui' || j == 'arenaReady')
											continue;
										for (k in play[i][j]) {
											if (j == 'translate' && k == i) {
												// lib[j][k+'_play_config']=play[i][j][k];
											} else {
												if (lib[j][k] != undefined) {
													console.log('dublicate ' + j + ' in play ' + i + ':\n' +
														k + '\n' + ': ' + lib[j][k] + '\n' + play[i][j][
														k
														]);
												}
												lib[j][k] = play[i][j][k];
											}
										}
									}
									if (typeof play[i].init == 'function') play[i].init();
									if (typeof play[i].arenaReady == 'function') lib.arenaReady.push(play[i]
										.arenaReady);
								}
							}

							lib.connectCharacterPack = [];
							lib.connectCardPack = [];
							for (var i = 0; i < lib.config.all.characters.length; i++) {
								var packname = lib.config.all.characters[i];
								if (connectCharacterPack.contains(packname)) {
									lib.connectCharacterPack.push(packname)
								}
							}
							for (var i = 0; i < lib.config.all.cards.length; i++) {
								var packname = lib.config.all.cards[i];
								if (connectCardPack.contains(packname)) {
									lib.connectCardPack.push(packname)
								}
							}
							if (lib.config.mode != 'connect') {
								for (i = 0; i < lib.card.list.length; i++) {
									if (lib.card.list[i][2] == 'huosha') {
										lib.card.list[i] = lib.card.list[i].slice(0);
										lib.card.list[i][2] = 'sha';
										lib.card.list[i][3] = 'fire';
									} else if (lib.card.list[i][2] == 'leisha') {
										lib.card.list[i] = lib.card.list[i].slice(0);
										lib.card.list[i][2] = 'sha';
										lib.card.list[i][3] = 'thunder';
									}
									if (!lib.card[lib.card.list[i][2]]) {
										lib.card.list.splice(i, 1);
										i--;
									} else if (lib.card[lib.card.list[i][2]].mode &&
										lib.card[lib.card.list[i][2]].mode.contains(lib.config.mode) ==
										false) {
										lib.card.list.splice(i, 1);
										i--;
									}
								}
							}

							if (lib.config.mode == 'connect') {
								_status.connectMode = true;
							}
							if (window.isNonameServer) {
								lib.cheat.i();
							} else if (lib.config.dev && (!_status.connectMode || lib.config.debug)) {
								lib.cheat.i();
							}
							lib.config.sort_card = get.sortCard(lib.config.sort);
							delete lib.imported.character;
							delete lib.imported.card;
							delete lib.imported.mode;
							delete lib.imported.play;
							for (var i in lib.init) {
								if (i.indexOf('setMode_') == 0) {
									delete lib.init[i];
								}
							}

							var loadExtensionCallback = function () {
								delete lib.extensions;

								if (lib.init.startBefore) {
									lib.init.startBefore();
									delete lib.init.startBefore;
								}
								ui.create.arena();
								game.createEvent('game', false).setContent(lib.init.start);
								if (lib.mode[lib.config.mode] && lib.mode[lib.config.mode]
									.fromextension) {
									var startstr = mode[lib.config.mode].start.toString();
									if (startstr.indexOf('onfree') == -1) {
										setTimeout(lib.init.onfree, 500);
									}
								}
								delete lib.init.start;
								game.loop();
								try { app.emit('createArenaAfter'); }
								catch (err) { }
							};
							if (lib.config.extension_手杀ui_enable) {
								if (!_status.connectMode) {
									var loadNextExtension = function () {
										var obj = lib.extensions.shift();
										if (obj) {
											try {
												_status.extension = obj[0];
												_status.evaluatingExtension = obj[3];
												if (obj[4]) {
													if (obj[4].character) {
														for (var j in obj[4].character.character) {
															game.addCharacterPack(get.copy(obj[4]
																.character));
															break;
														}
													}
													if (obj[4].card) {
														for (var j in obj[4].card.card) {
															game.addCardPack(get.copy(obj[4].card));
															break;
														}
													}
													if (obj[4].skill) {
														for (var j in obj[4].skill.skill) {
															game.addSkill(j, obj[4].skill.skill[j],
																obj[4].skill.translate[j], obj[4].skill
																	.translate[j + '_info']);
														}
													}
												}
												var func = obj[1](obj[2], obj[4]);
												if (typeof func === 'function') {
													func(loadNextExtension);
												} else {
													loadNextExtension();
												}
											} catch (e) {
												console.log(e);
												loadNextExtension();
											}
										} else {
											delete _status.extension;
											delete _status.evaluatingExtension;
											loadExtensionCallback();
										}
									};
									loadNextExtension();
								} else {
									loadExtensionCallback();
								}
							} else {
								if (!_status.connectMode) {
									for (var i = 0; i < lib.extensions.length; i++) {
										try {
											_status.extension = lib.extensions[i][0];
											_status.evaluatingExtension = lib.extensions[i][3];
											lib.extensions[i][1](lib.extensions[i][2], lib.extensions[i][4]);
											if (lib.extensions[i][4]) {
												if (lib.extensions[i][4].character) {
													for (var j in lib.extensions[i][4].character.character) {
														game.addCharacterPack(get.copy(lib.extensions[i][4].character));
														break;
													}
												}
												if (lib.extensions[i][4].card) {
													for (var j in lib.extensions[i][4].card.card) {
														game.addCardPack(get.copy(lib.extensions[i][4].card));
														break;
													}
												}
												if (lib.extensions[i][4].skill) {
													for (var j in lib.extensions[i][4].skill.skill) {
														game.addSkill(j, lib.extensions[i][4].skill.skill[j],
															lib.extensions[i][4].skill.translate[j], lib.extensions[i][4].skill.translate[j + '_info']);
													}
												}
											}
											delete _status.extension;
											delete _status.evaluatingExtension;
										}
										catch (e) {
											console.log(e);
										}
									}
								}
								delete lib.extensions;

								if (lib.init.startBefore) {
									lib.init.startBefore();
									delete lib.init.startBefore;
								}
								ui.create.arena();
								game.createEvent('game', false).setContent(lib.init.start);
								if (lib.mode[lib.config.mode] && lib.mode[lib.config.mode].fromextension) {
									var startstr = mode[lib.config.mode].start.toString();
									if (startstr.indexOf('onfree') == -1) {
										setTimeout(lib.init.onfree, 500);
									}
								}
								delete lib.init.start;
								game.loop();
							}
						}
						var proceed = function () {
							if (!lib.db) {
								try {
									lib.storage = JSON.parse(localStorage.getItem(lib.configprefix + lib
										.config.mode));
									if (typeof lib.storage != 'object') throw ('err');
									if (lib.storage == null) throw ('err');
								} catch (err) {
									lib.storage = {};
									localStorage.setItem(lib.configprefix + lib.config.mode, "{}");
								}
								proceed2();
							} else {
								game.getDB('data', lib.config.mode, function (obj) {
									lib.storage = obj || {};
									proceed2();
								});
							}
						};
						//界面函数		
						if (!lib.imported.mode || !lib.imported.mode[lib.config.mode]) {
							window.inSplash = true;
							clearTimeout(window.resetGameTimeout);
							delete window.resetGameTimeout;
							var clickedNode = false;
							//退出按钮的函数					
							//点击模式按钮						
							var clickNodek = function () {
								//该接口修改点击按钮时背景图片变化
								var splash = document.getElementById("splash");
								splash.setBackgroundImage('extension/如真似幻/images/mode/' + this.link + '.jpg');
								var cxk = document.getElementsByClassName('cxk')[0];
								cxk.classList.remove('cxk');
								this.classList.add('cxk');
							};
							var clickNode = function () {
								if (clickedNode) return;
								clickedNode = true;
								//将进模式link选择的模式
								var selectedNode = document.getElementsByClassName('cxk')[0];
								lib.config.mode = selectedNode.link;
								game.saveConfig('mode', selectedNode.link);
								if (game.layout != 'mobile' && lib.layoutfixed.indexOf(lib.config.mode) !==
									-1) {
									game.layout = 'mobile';
									ui.css.layout.href = lib.assetURL + 'layout/' + game.layout +
										'/layout.css';
								} else if (game.layout == 'mobile' && lib.config.layout != 'mobile' && lib
									.layoutfixed.indexOf(lib.config.mode) === -1) {
									game.layout = lib.config.layout;
									if (game.layout == 'default') {
										ui.css.layout.href = '';
									} else {
										ui.css.layout.href = lib.assetURL + 'layout/' + game.layout +
											'/layout.css';
									}
								}
								splash.delete(1000);
								delete window.inSplash;
								window.resetGameTimeout = setTimeout(lib.init.reset, 5000);

								selectedNode.listenTransition(function () {
									lib.init.js(lib.assetURL + 'mode', lib.config.mode, proceed);
								}, 500);
							}
							var downNode = function () {
								this.classList.add('glow');
							}
							var upNode = function () {
								this.classList.remove('glow');
							}
							var splash = ui.create.div('#splash', document.body);
							if (lib.config.touchscreen) {
								splash.classList.add('touch');
								lib.setScroll(splash);
							}
							if (lib.config.player_border != 'wide') {
								splash.classList.add('slim');
							}
							//创建enter按钮					
							var bigEnter = document.createElement('img');
							bigEnter.src = lib.assetURL + 'extension/如真似幻/images/offline/kaizhan.png'
							bigEnter.width = 100;
							bigEnter.id = 'bigenter'; // 设置元素的 ID
							splash.appendChild(bigEnter);
							// 添加click事件监听器
							bigEnter.addEventListener('click', () => {
								// 执行clickNode函数，并在执行后立即删除click事件监听器
								clickNode(), bigEnter.removeEventListener('click', arguments.callee);
							});
							var offlineText = document.createElement('img');
							offlineText.src = lib.assetURL + 'extension/如真似幻/images/offline/offlinetext.png'
							offlineText.id = 'offlinetext'; // 设置元素的 ID
							splash.appendChild(offlineText);
							var logOut = document.createElement('img');
							logOut.src = lib.assetURL + 'extension/如真似幻/images/offline/button.png'
							logOut.id = 'logout'; // 设置元素的 ID
							splash.appendChild(logOut);
							splash.setBackgroundImage('extension/如真似幻/images/mode/identity.jpg');
							// 缓存logOut按钮
							// 添加click事件监听器
							logOut.addEventListener('click', (event) => {
								// 如果被点击的元素是logOut按钮，执行相应操作并删除click事件监听器
								event.target === logOut && (
									localStorage.removeItem('Network'),
									window.location.href = lib.assetURL + 'extension/如真似幻/html/rzsh.html',
									logOut.removeEventListener('click', arguments.callee)
								);
							});
							splash.dataset.radius_size = lib.config.radius_size;
							for (var i = 0; i < lib.config.all.mode.length; i++) {
								var node = ui.create.div('.hidden', splash, clickNodek);
								if (i == 0) node.classList.add('cxk');
								node.link = lib.config.all.mode[i];
								//去掉br
								ui.create.div(node, '.splashtext', get.translation(lib.config
									.all.mode[i]));
								if (lib.config.all.stockmode.indexOf(lib.config.all.mode[i]) != -1) {
									ui.create.div(node, '.avatar').setBackgroundImage('image/splash/' + lib.config.all.mode[i] + '.jpg');
								} else {
									var avatarnode = ui.create.div(node, '.avatar');
									var avatarbg = lib.mode[lib.config.all.mode[i]].splash;
									if (avatarbg.indexOf('ext:') == 0) {
										avatarnode.setBackgroundImage(avatarbg.replace(/ext:/, 'extension/'));
									} else {
										avatarnode.setBackgroundDB(avatarbg);
									}
								}
								if (!lib.config.touchscreen) {
									node.addEventListener('mousedown', downNode);
									node.addEventListener('mouseup', upNode);
									node.addEventListener('mouseleave', upNode);
								}
								setTimeout((function (node) {
									return function () {
										node.show();
									}
								}(node)), i * 100);
							}
							if (lib.config.mousewheel) {
								splash.onmousewheel = ui.click.mousewheel;
							}
						} else {
							proceed();
						}
						localStorage.removeItem(lib.configprefix + 'directstart');
						delete lib.init.init;

					}
				}
				else {
					lib.init.onload = function () {
						console.time('y加载完毕')
						console.time('Z加载完毕')
						console.time('g加载完毕');
						ui.updated();
						game.documentZoom = game.deviceZoom;
						if (game.documentZoom != 1) {
							ui.updatez();
						}
						ui.background = ui.create.div('.background');
						ui.background.style.backgroundSize = "cover";
						ui.background.style.backgroundPosition = '50% 50%';
						if (lib.config.image_background && lib.config.image_background != 'default' && lib
							.config.image_background.indexOf('custom_') != 0) {
							ui.background.setBackgroundImage('image/background/' + lib.config.image_background +
								'.jpg');
							if (lib.config.image_background_blur) {
								ui.background.style.filter = 'blur(8px)';
								ui.background.style.webkitFilter = 'blur(8px)';
								ui.background.style.transform = 'scale(1.05)';
							}
						}
						document.documentElement.style.backgroundImage = '';
						document.documentElement.style.backgroundSize = '';
						document.documentElement.style.backgroundPosition = '';
						document.body.insertBefore(ui.background, document.body.firstChild);
						document.body.onresize = ui.updatexr;
						if (lib.config.touchscreen) {
							document.body.addEventListener('touchstart', function (e) {
								this.startX = e.touches[0].clientX / game.documentZoom;
								this.startY = e.touches[0].clientY / game.documentZoom;
								_status.dragged = false;
							});
							document.body.addEventListener('touchmove', function (e) {
								if (_status.dragged) return;
								if (Math.abs(e.touches[0].clientX / game.documentZoom - this.startX) >
									10 ||
									Math.abs(e.touches[0].clientY / game.documentZoom - this.startY) >
									10) {
									_status.dragged = true;
								}
							});
						}

						if (lib.config.image_background.indexOf('custom_') == 0) {
							ui.background.style.backgroundImage = "none";
							game.getDB('image', lib.config.image_background, function (fileToLoad) {
								if (!fileToLoad) return;
								var fileReader = new FileReader();
								fileReader.onload = function (fileLoadedEvent) {
									var data = fileLoadedEvent.target.result;
									ui.background.style.backgroundImage = 'url(' + data + ')';
									if (lib.config.image_background_blur) {
										ui.background.style.filter = 'blur(8px)';
										ui.background.style.webkitFilter = 'blur(8px)';
										ui.background.style.transform = 'scale(1.05)';
									}
								};
								fileReader.readAsDataURL(fileToLoad, "UTF-8");
							});
						}
						if (lib.config.card_style == 'custom') {
							game.getDB('image', 'card_style', function (fileToLoad) {
								if (!fileToLoad) return;
								var fileReader = new FileReader();
								fileReader.onload = function (fileLoadedEvent) {
									if (ui.css.card_stylesheet) {
										ui.css.card_stylesheet.remove();
									}
									ui.css.card_stylesheet = lib.init.sheet(
										'.card:not(*:empty){background-image:url(' +
										fileLoadedEvent.target.result + ')}');
								};
								fileReader.readAsDataURL(fileToLoad, "UTF-8");
							});
						}
						if (lib.config.cardback_style == 'custom') {
							game.getDB('image', 'cardback_style', function (fileToLoad) {
								if (!fileToLoad) return;
								var fileReader = new FileReader();
								fileReader.onload = function (fileLoadedEvent) {
									if (ui.css.cardback_stylesheet) {
										ui.css.cardback_stylesheet.remove();
									}
									ui.css.cardback_stylesheet = lib.init.sheet(
										'.card:empty,.card.infohidden{background-image:url(' +
										fileLoadedEvent.target.result + ')}');
								};
								fileReader.readAsDataURL(fileToLoad, "UTF-8");
							});
							game.getDB('image', 'cardback_style2', function (fileToLoad) {
								if (!fileToLoad) return;
								var fileReader = new FileReader();
								fileReader.onload = function (fileLoadedEvent) {
									if (ui.css.cardback_stylesheet2) {
										ui.css.cardback_stylesheet2.remove();
									}
									ui.css.cardback_stylesheet2 = lib.init.sheet(
										'.card.infohidden:not(.infoflip){background-image:url(' +
										fileLoadedEvent.target.result + ')}');
								};
								fileReader.readAsDataURL(fileToLoad, "UTF-8");
							});
						}
						if (lib.config.hp_style == 'custom') {
							game.getDB('image', 'hp_style1', function (fileToLoad) {
								if (!fileToLoad) return;
								var fileReader = new FileReader();
								fileReader.onload = function (fileLoadedEvent) {
									if (ui.css.hp_stylesheet1) {
										ui.css.hp_stylesheet1.remove();
									}
									ui.css.hp_stylesheet1 = lib.init.sheet(
										'.hp:not(.text):not(.actcount)[data-condition="high"]>div:not(.lost){background-image:url(' +
										fileLoadedEvent.target.result + ')}');
								};
								fileReader.readAsDataURL(fileToLoad, "UTF-8");
							});
							game.getDB('image', 'hp_style2', function (fileToLoad) {
								if (!fileToLoad) return;
								var fileReader = new FileReader();
								fileReader.onload = function (fileLoadedEvent) {
									if (ui.css.hp_stylesheet2) {
										ui.css.hp_stylesheet2.remove();
									}
									ui.css.hp_stylesheet2 = lib.init.sheet(
										'.hp:not(.text):not(.actcount)[data-condition="mid"]>div:not(.lost){background-image:url(' +
										fileLoadedEvent.target.result + ')}');
								};
								fileReader.readAsDataURL(fileToLoad, "UTF-8");
							});
							game.getDB('image', 'hp_style3', function (fileToLoad) {
								if (!fileToLoad) return;
								var fileReader = new FileReader();
								fileReader.onload = function (fileLoadedEvent) {
									if (ui.css.hp_stylesheet3) {
										ui.css.hp_stylesheet3.remove();
									}
									ui.css.hp_stylesheet3 = lib.init.sheet(
										'.hp:not(.text):not(.actcount)[data-condition="low"]>div:not(.lost){background-image:url(' +
										fileLoadedEvent.target.result + ')}');
								};
								fileReader.readAsDataURL(fileToLoad, "UTF-8");
							});
							game.getDB('image', 'hp_style4', function (fileToLoad) {
								if (!fileToLoad) return;
								var fileReader = new FileReader();
								fileReader.onload = function (fileLoadedEvent) {
									if (ui.css.hp_stylesheet4) {
										ui.css.hp_stylesheet4.remove();
									}
									ui.css.hp_stylesheet4 = lib.init.sheet(
										'.hp:not(.text):not(.actcount)>.lost{background-image:url(' +
										fileLoadedEvent.target.result + ')}');
								};
								fileReader.readAsDataURL(fileToLoad, "UTF-8");
							});
						}
						if (lib.config.player_style == 'custom') {
							ui.css.player_stylesheet = lib.init.sheet(
								'#window .player{background-image:none;background-size:100% 100%;}');
							game.getDB('image', 'player_style', function (fileToLoad) {
								if (!fileToLoad) return;
								var fileReader = new FileReader();
								fileReader.onload = function (fileLoadedEvent) {
									if (ui.css.player_stylesheet) {
										ui.css.player_stylesheet.remove();
									}
									ui.css.player_stylesheet = lib.init.sheet(
										'#window .player{background-image:url("' +
										fileLoadedEvent.target.result +
										'");background-size:100% 100%;}');
								};
								fileReader.readAsDataURL(fileToLoad, "UTF-8");
							});
						}
						if (lib.config.border_style == 'custom') {
							game.getDB('image', 'border_style', function (fileToLoad) {
								if (!fileToLoad) return;
								var fileReader = new FileReader();
								fileReader.onload = function (fileLoadedEvent) {
									if (ui.css.border_stylesheet) {
										ui.css.border_stylesheet.remove();
									}
									ui.css.border_stylesheet = lib.init.sheet();
									ui.css.border_stylesheet.sheet.insertRule(
										'#window .player>.framebg{display:block;background-image:url("' +
										fileLoadedEvent.target.result + '")}', 0);
									ui.css.border_stylesheet.sheet.insertRule(
										'.player>.count{z-index: 3 !important;border-radius: 2px !important;text-align: center !important;}',
										0);
								};
								fileReader.readAsDataURL(fileToLoad, "UTF-8");
							});
						}
						if (lib.config.control_style == 'custom') {
							game.getDB('image', 'control_style', function (fileToLoad) {
								if (!fileToLoad) return;
								var fileReader = new FileReader();
								fileReader.onload = function (fileLoadedEvent) {
									if (ui.css.control_stylesheet) {
										ui.css.control_stylesheet.remove();
									}
									ui.css.control_stylesheet = lib.init.sheet(
										'#window .control,.menubutton:not(.active):not(.highlight):not(.red):not(.blue),#window #system>div>div{background-image:url("' +
										fileLoadedEvent.target.result + '")}');
								};
								fileReader.readAsDataURL(fileToLoad, "UTF-8");
							});
						}
						if (lib.config.menu_style == 'custom') {
							game.getDB('image', 'menu_style', function (fileToLoad) {
								if (!fileToLoad) return;
								var fileReader = new FileReader();
								fileReader.onload = function (fileLoadedEvent) {
									if (ui.css.menu_stylesheet) {
										ui.css.menu_stylesheet.remove();
									}
									ui.css.menu_stylesheet = lib.init.sheet(
										'html #window>.dialog.popped,html .menu,html .menubg{background-image:url("' +
										fileLoadedEvent.target.result +
										'");background-size:cover}');
								};
								fileReader.readAsDataURL(fileToLoad, "UTF-8");
							});
						}

						(() => {
							if (!localStorage.getItem('loggedIn')) document.body.remove();
							var character = lib.imported.character;
							var i, j, k;
							lib.rank = window.noname_character_rank;
							var connectCharacterPack = [];
							for (i in character) {
								if (character[i].character) {
									lib.characterPack[i] = character[i].character
								}
								for (j in character[i]) {
									if (j == 'mode' || j == 'forbid') continue;
									if (j == 'connect') {
										connectCharacterPack.push(i);
										continue;
									}
									if (j == 'character' && !lib.config.characters.contains(i) && lib.config
										.mode != 'connect') {
										if (lib.config.mode == 'chess' && get.config('chess_mode') ==
											'leader') {
											for (k in character[i][j]) {
												lib.hiddenCharacters.push(k);
											}
										} else if (lib.config.mode != 'boss' || i != 'boss') {
											continue;
										}
									}
									if (Array.isArray(lib[j]) && Array.isArray(character[i][j])) {
										lib[j].addArray(character[i][j]);
										continue;
									}
									for (k in character[i][j]) {
										if (j == 'character') {
											if (!character[i][j][k][4]) {
												character[i][j][k][4] = [];
											}
											if (character[i][j][k][4].contains('boss') ||
												character[i][j][k][4].contains('hiddenboss')) {
												lib.config.forbidai.add(k);
											}
											if (lib.config.forbidai_user && lib.config.forbidai_user
												.contains(k)) {
												lib.config.forbidai.add(k);
											}
											for (var l = 0; l < character[i][j][k][3].length; l++) {
												lib.skilllist.add(character[i][j][k][3][l]);
											}
										}
										if (j == 'skill' && k[0] == '_' && (!lib.config.characters.contains(
											i) || (lib.config.mode == 'connect' && !character[i]
												.connect))) {
											continue;
										}
										if (j == 'translate' && k == i) {
											lib[j][k + '_character_config'] = character[i][j][k];
										} else {
											if (lib[j][k] == undefined) {
												if (j == 'skill' && lib.config.mode == 'connect' && !
													character[i].connect) {
													lib[j][k] = {
														nopop: character[i][j][k].nopop,
														derivation: character[i][j][k].derivation
													};
												} else {
													lib[j][k] = character[i][j][k];
												}
											} else if (Array.isArray(lib[j][k]) && Array.isArray(character[
												i][j][k])) {
												lib[j][k].addArray(character[i][j][k]);
											} else {
											}
										}
									}
								}
							}
						})()
						var proceed2 = function () {
							var mode = lib.imported.mode;
							var card = lib.imported.card;
							var character = lib.imported.character;
							var play = lib.imported.play;
							delete window.game;
							var i, j, k;
							for (i in mode[lib.config.mode].element) {
								if (!lib.element[i]) lib.element[i] = [];
								for (j in mode[lib.config.mode].element[i]) {
									if (j == 'init') {
										if (!lib.element[i].inits) lib.element[i].inits = [];
										lib.element[i].inits.push(mode[lib.config.mode].element[i][j]);
									} else {
										lib.element[i][j] = mode[lib.config.mode].element[i][j];
									}
								}
							}
							for (i in mode[lib.config.mode].ai) {
								if (typeof mode[lib.config.mode].ai[i] == 'object') {
									if (ai[i] == undefined) ai[i] = {};
									for (j in mode[lib.config.mode].ai[i]) {
										ai[i][j] = mode[lib.config.mode].ai[i][j];
									}
								} else {
									ai[i] = mode[lib.config.mode].ai[i];
								}
							}
							for (i in mode[lib.config.mode].ui) {
								if (typeof mode[lib.config.mode].ui[i] == 'object') {
									if (ui[i] == undefined) ui[i] = {};
									for (j in mode[lib.config.mode].ui[i]) {
										ui[i][j] = mode[lib.config.mode].ui[i][j];
									}
								} else {
									ui[i] = mode[lib.config.mode].ui[i];
								}
							}
							for (i in mode[lib.config.mode].game) {
								game[i] = mode[lib.config.mode].game[i];
							}
							for (i in mode[lib.config.mode].get) {
								get[i] = mode[lib.config.mode].get[i];
							}
							lib.init.start = mode[lib.config.mode].start;
							lib.init.startBefore = mode[lib.config.mode].startBefore;
							if (game.onwash) {
								lib.onwash.push(game.onwash);
								delete game.onwash;
							}
							if (game.onover) {
								lib.onover.push(game.onover);
								delete game.onover;
							}
							lib.config.banned = lib.config[lib.config.mode + '_banned'] || [];
							lib.config.bannedcards = lib.config[lib.config.mode + '_bannedcards'] || [];

							lib.rank = window.noname_character_rank;
							delete window.noname_character_rank;
							for (i in mode[lib.config.mode]) {
								if (i == 'element') continue;
								if (i == 'game') continue;
								if (i == 'ai') continue;
								if (i == 'ui') continue;
								if (i == 'get') continue;
								if (i == 'config') continue;
								if (i == 'onreinit') continue;
								if (i == 'start') continue;
								if (i == 'startBefore') continue;
								if (lib[i] == undefined) lib[i] = (Array.isArray(mode[lib.config.mode][
									i
								])) ? [] : {};
								for (j in mode[lib.config.mode][i]) {
									lib[i][j] = mode[lib.config.mode][i][j];
								}
							}
							if (typeof mode[lib.config.mode].init == 'function') {
								mode[lib.config.mode].init();
							}

							var connectCharacterPack = [];
							var connectCardPack = [];
							for (i in character) {
								if (character[i].character) {
									lib.characterPack[i] = character[i].character
								}
								for (j in character[i]) {
									if (j == 'mode' || j == 'forbid') continue;
									if (j == 'connect') {
										connectCharacterPack.push(i);
										continue;
									}
									if (j == 'character' && !lib.config.characters.contains(i) && lib.config
										.mode != 'connect') {
										if (lib.config.mode == 'chess' && get.config('chess_mode') ==
											'leader') {
											for (k in character[i][j]) {
												lib.hiddenCharacters.push(k);
											}
										} else if (lib.config.mode != 'boss' || i != 'boss') {
											continue;
										}
									}
									if (Array.isArray(lib[j]) && Array.isArray(character[i][j])) {
										lib[j].addArray(character[i][j]);
										continue;
									}
									for (k in character[i][j]) {
										if (j == 'character') {
											if (!character[i][j][k][4]) {
												character[i][j][k][4] = [];
											}
											if (character[i][j][k][4].contains('boss') ||
												character[i][j][k][4].contains('hiddenboss')) {
												lib.config.forbidai.add(k);
											}
											if (lib.config.forbidai_user && lib.config.forbidai_user
												.contains(k)) {
												lib.config.forbidai.add(k);
											}
											for (var l = 0; l < character[i][j][k][3].length; l++) {
												lib.skilllist.add(character[i][j][k][3][l]);
											}
										}
										if (j == 'skill' && k[0] == '_' && (!lib.config.characters.contains(
											i) || (lib.config.mode == 'connect' && !character[i]
												.connect))) {
											continue;
										}
										if (j == 'translate' && k == i) {
											lib[j][k + '_character_config'] = character[i][j][k];
										} else {
											if (lib[j][k] == undefined) {
												if (j == 'skill' && lib.config.mode == 'connect' && !
													character[i].connect) {
													lib[j][k] = {
														nopop: character[i][j][k].nopop,
														derivation: character[i][j][k].derivation
													};
												} else {
													lib[j][k] = character[i][j][k];
												}
												if (j == 'card' && lib[j][k].derivation) {
													if (!lib.cardPack.mode_derivation) {
														lib.cardPack.mode_derivation = [k];
													} else {
														lib.cardPack.mode_derivation.push(k);
													}
												}
											} else if (Array.isArray(lib[j][k]) && Array.isArray(character[
												i][j][k])) {
												lib[j][k].addArray(character[i][j][k]);
											} else {
												/*	console.log('dublicate ' + j + ' in character ' + i +
														':\n' + k + '\n' + ': ' + lib[j][k] + '\n' +
														character[i][j][k]);*/
											}
										}
									}
								}
							}
							var connect_avatar_list = [];
							for (var i in lib.character) {
								connect_avatar_list.push(i);
							}
							connect_avatar_list.sort(lib.sort.capt);
							for (var i = 0; i < connect_avatar_list.length; i++) {
								var ia = connect_avatar_list[i];
								lib.mode.connect.config.connect_avatar.item[ia] = lib.translate[ia];
							}
							if (lib.config.mode != 'connect') {
								var pilecfg = lib.config.customcardpile[get.config('cardpilename') ||
									'当前牌堆'];
								if (pilecfg) {
									lib.config.bannedpile = get.copy(pilecfg[0] || {});
									lib.config.addedpile = get.copy(pilecfg[1] || {});
								} else {
									lib.config.bannedpile = {};
									lib.config.addedpile = {};
								}
							} else {
								lib.cardPackList = {};
							}
							for (i in card) {
								lib.cardPack[i] = [];
								if (card[i].card) {
									for (var j in card[i].card) {
										if (!card[i].card[j].hidden && card[i].translate[j + '_info']) {
											lib.cardPack[i].push(j);
										}
									}
								}
								for (j in card[i]) {
									if (j == 'mode' || j == 'forbid') continue;
									if (j == 'connect') {
										connectCardPack.push(i);
										continue;
									}
									if (j == 'list') {
										if (lib.config.mode == 'connect') {
											lib.cardPackList[i] = card[i][j];
										} else {
											if (lib.config.cards.contains(i)) {
												var pile;
												if (typeof card[i][j] == 'function') {
													pile = card[i][j]();
												} else {
													pile = card[i][j];
												}
												lib.cardPile[i] = pile.slice(0);
												if (lib.config.bannedpile[i]) {
													for (var k = 0; k < lib.config.bannedpile[i]
														.length; k++) {
														pile[lib.config.bannedpile[i][k]] = null;
													}
												}
												for (var k = 0; k < pile.length; k++) {
													if (!pile[k]) {
														pile.splice(k--, 1);
													}
												}
												if (lib.config.addedpile[i]) {
													for (var k = 0; k < lib.config.addedpile[i]
														.length; k++) {
														pile.push(lib.config.addedpile[i][k]);
													}
												}
												lib.card.list = lib.card.list.concat(pile);
											}
										}
									} else {
										for (k in card[i][j]) {
											if (j == 'skill' && k[0] == '_' && (!lib.config.cards.contains(
												i) || (lib.config.mode == 'connect' && !card[i]
													.connect))) {
												continue;
											}
											if (j == 'translate' && k == i) {
												lib[j][k + '_card_config'] = card[i][j][k];
											} else {
												if (lib[j][k] == undefined) {
													if (j == 'skill' && lib.config.mode == 'connect' && !
														card[i].connect) {
														lib[j][k] = {
															nopop: card[i][j][k].nopop,
															derivation: card[i][j][k].derivation
														};
													} else {
														lib[j][k] = card[i][j][k];
													}
												} else console.log('dublicate ' + j + ' in card ' + i +
													':\n' + k + '\n' + lib[j][k] + '\n' + card[i][j][k]);
												if (j == 'card' && lib[j][k].derivation) {
													if (!lib.cardPack.mode_derivation) {
														lib.cardPack.mode_derivation = [k];
													} else {
														lib.cardPack.mode_derivation.push(k);
													}
												}
											}
										}
									}
								}
							}
							if (lib.cardPack.mode_derivation) {
								for (var i = 0; i < lib.cardPack.mode_derivation.length; i++) {
									if (typeof lib.card[lib.cardPack.mode_derivation[i]].derivation ==
										'string' && !lib.character[lib.card[lib.cardPack.mode_derivation[i]]
											.derivation]) {
										lib.cardPack.mode_derivation.splice(i--, 1);
									} else if (typeof lib.card[lib.cardPack.mode_derivation[i]]
										.derivationpack == 'string' && !lib.config.cards.contains(lib.card[
											lib.cardPack.mode_derivation[i]].derivationpack)) {
										lib.cardPack.mode_derivation.splice(i--, 1);
									}
								}
								if (lib.cardPack.mode_derivation.length == 0) {
									delete lib.cardPack.mode_derivation;
								}
							}
							if (lib.config.mode != 'connect') {
								for (i in play) {
									if (lib.config.hiddenPlayPack.contains(i)) continue;
									if (play[i].forbid && play[i].forbid.contains(lib.config.mode))
										continue;
									if (play[i].mode && play[i].mode.contains(lib.config.mode) == false)
										continue;
									for (j in play[i].element) {
										if (!lib.element[j]) lib.element[j] = [];
										for (k in play[i].element[j]) {
											if (k == 'init') {
												if (!lib.element[j].inits) lib.element[j].inits = [];
												lib.element[j].inits.push(play[i].element[j][k]);
											} else {
												lib.element[j][k] = play[i].element[j][k];
											}
										}
									}
									for (j in play[i].ui) {
										if (typeof play[i].ui[j] == 'object') {
											if (ui[j] == undefined) ui[j] = {};
											for (k in play[i].ui[j]) {
												ui[j][k] = play[i].ui[j][k];
											}
										} else {
											ui[j] = play[i].ui[j];
										}
									}
									for (j in play[i].game) {
										game[j] = play[i].game[j];
									}
									for (j in play[i].get) {
										get[j] = play[i].get[j];
									}
									for (j in play[i]) {
										if (j == 'mode' || j == 'forbid' || j == 'init' || j == 'element' ||
											j == 'game' || j == 'get' || j == 'ui' || j == 'arenaReady')
											continue;
										for (k in play[i][j]) {
											if (j == 'translate' && k == i) {
												// lib[j][k+'_play_config']=play[i][j][k];
											} else {
												if (lib[j][k] != undefined) {
													console.log('dublicate ' + j + ' in play ' + i + ':\n' +
														k + '\n' + ': ' + lib[j][k] + '\n' + play[i][j][
														k
														]);
												}
												lib[j][k] = play[i][j][k];
											}
										}
									}
									if (typeof play[i].init == 'function') play[i].init();
									if (typeof play[i].arenaReady == 'function') lib.arenaReady.push(play[i]
										.arenaReady);
								}
							}

							lib.connectCharacterPack = [];
							lib.connectCardPack = [];
							for (var i = 0; i < lib.config.all.characters.length; i++) {
								var packname = lib.config.all.characters[i];
								if (connectCharacterPack.contains(packname)) {
									lib.connectCharacterPack.push(packname)
								}
							}
							for (var i = 0; i < lib.config.all.cards.length; i++) {
								var packname = lib.config.all.cards[i];
								if (connectCardPack.contains(packname)) {
									lib.connectCardPack.push(packname)
								}
							}
							if (lib.config.mode != 'connect') {
								for (i = 0; i < lib.card.list.length; i++) {
									if (lib.card.list[i][2] == 'huosha') {
										lib.card.list[i] = lib.card.list[i].slice(0);
										lib.card.list[i][2] = 'sha';
										lib.card.list[i][3] = 'fire';
									} else if (lib.card.list[i][2] == 'leisha') {
										lib.card.list[i] = lib.card.list[i].slice(0);
										lib.card.list[i][2] = 'sha';
										lib.card.list[i][3] = 'thunder';
									}
									if (!lib.card[lib.card.list[i][2]]) {
										lib.card.list.splice(i, 1);
										i--;
									} else if (lib.card[lib.card.list[i][2]].mode &&
										lib.card[lib.card.list[i][2]].mode.contains(lib.config.mode) ==
										false) {
										lib.card.list.splice(i, 1);
										i--;
									}
								}
							}

							if (lib.config.mode == 'connect') {
								_status.connectMode = true;
							}
							if (window.isNonameServer) {
								lib.cheat.i();
							} else if (lib.config.dev && (!_status.connectMode || lib.config.debug)) {
								lib.cheat.i();
							}
							lib.config.sort_card = get.sortCard(lib.config.sort);
							delete lib.imported.character;
							delete lib.imported.card;
							delete lib.imported.mode;
							delete lib.imported.play;
							for (var i in lib.init) {
								if (i.indexOf('setMode_') == 0) {
									delete lib.init[i];
								}
							}
							var loadExtensionCallback = function () {
								delete lib.extensions;

								if (lib.init.startBefore) {
									lib.init.startBefore();
									delete lib.init.startBefore;
								}
								ui.create.arena();
								game.createEvent('game', false).setContent(lib.init.start);
								if (lib.mode[lib.config.mode] && lib.mode[lib.config.mode]
									.fromextension) {
									var startstr = mode[lib.config.mode].start.toString();
									if (startstr.indexOf('onfree') == -1) {
										setTimeout(lib.init.onfree, 500);
									}
								}
								delete lib.init.start;
								game.loop();
								try { app.emit('createArenaAfter'); }
								catch (err) { }
							};
							if (lib.config.extension_手杀ui_enable) {
								if (!_status.connectMode) {
									var loadNextExtension = function () {
										var obj = lib.extensions.shift();
										if (obj) {
											try {
												_status.extension = obj[0];
												_status.evaluatingExtension = obj[3];
												if (obj[4]) {
													if (obj[4].character) {
														for (var j in obj[4].character.character) {
															game.addCharacterPack(get.copy(obj[4]
																.character));
															break;
														}
													}
													if (obj[4].card) {
														for (var j in obj[4].card.card) {
															game.addCardPack(get.copy(obj[4].card));
															break;
														}
													}
													if (obj[4].skill) {
														for (var j in obj[4].skill.skill) {
															game.addSkill(j, obj[4].skill.skill[j],
																obj[4].skill.translate[j], obj[4].skill
																	.translate[j + '_info']);
														}
													}
												}
												var func = obj[1](obj[2], obj[4]);
												if (typeof func === 'function') {
													func(loadNextExtension);
												} else {
													loadNextExtension();
												}
											} catch (e) {
												console.log(e);
												loadNextExtension();
											}
										} else {
											delete _status.extension;
											delete _status.evaluatingExtension;
											loadExtensionCallback();
										}
									};
									loadNextExtension();
								} else {
									loadExtensionCallback();
								}
							} else {
								if (!_status.connectMode) {
									for (var i = 0; i < lib.extensions.length; i++) {
										try {
											_status.extension = lib.extensions[i][0];
											_status.evaluatingExtension = lib.extensions[i][3];
											lib.extensions[i][1](lib.extensions[i][2], lib.extensions[i][4]);
											if (lib.extensions[i][4]) {
												if (lib.extensions[i][4].character) {
													for (var j in lib.extensions[i][4].character.character) {
														game.addCharacterPack(get.copy(lib.extensions[i][4].character));
														break;
													}
												}
												if (lib.extensions[i][4].card) {
													for (var j in lib.extensions[i][4].card.card) {
														game.addCardPack(get.copy(lib.extensions[i][4].card));
														break;
													}
												}
												if (lib.extensions[i][4].skill) {
													for (var j in lib.extensions[i][4].skill.skill) {
														game.addSkill(j, lib.extensions[i][4].skill.skill[j],
															lib.extensions[i][4].skill.translate[j], lib.extensions[i][4].skill.translate[j + '_info']);
													}
												}
											}
											delete _status.extension;
											delete _status.evaluatingExtension;
										}
										catch (e) {
											console.log(e);
										}
									}
								}
								delete lib.extensions;

								if (lib.init.startBefore) {
									lib.init.startBefore();
									delete lib.init.startBefore;
								}
								ui.create.arena();
								game.createEvent('game', false).setContent(lib.init.start);
								if (lib.mode[lib.config.mode] && lib.mode[lib.config.mode].fromextension) {
									var startstr = mode[lib.config.mode].start.toString();
									if (startstr.indexOf('onfree') == -1) {
										setTimeout(lib.init.onfree, 500);
									}
								}
								delete lib.init.start;
								game.loop();
							}
						}
						var proceed = function () {
							if (!lib.db) {
								try {
									lib.storage = JSON.parse(localStorage.getItem(lib.configprefix + lib
										.config.mode));
									if (typeof lib.storage != 'object') throw ('err');
									if (lib.storage == null) throw ('err');
								} catch (err) {
									lib.storage = {};
									localStorage.setItem(lib.configprefix + lib.config.mode, "{}");
								}
								proceed2();
							} else {
								game.getDB('data', lib.config.mode, function (obj) {
									lib.storage = obj || {};
									proceed2();
								});
							}
						};
						//界面函数		
						if (!lib.imported.mode || !lib.imported.mode[lib.config.mode]) {
							let dpr = Math.max(window.devicePixelRatio * (window.documentZoom ? window.documentZoom : 1), 1);
							//pixi主程序		        
							const pixiapp = new PIXI.Application({
								resizeTo: document.body,
								backgroundAlpha: 0,
								resolution: dpr,
								autoDensity: true,
							});
							document.body.appendChild(pixiapp.view);
							//加载按钮声
							const btnmList = [
								{ name: 'Label', path: 'extension/如真似幻/audio/sgs/Label.mp3' },
								{ name: 'Menu', path: 'extension/如真似幻/audio/sgs/Menu.mp3' },
								{ name: 'MidButton', path: 'extension/如真似幻/audio/sgs/MidButton.mp3' },
								{ name: 'Notice02', path: 'extension/如真似幻/audio/sgs/Notice02.mp3' },
								//	{ name: 'outgame', path: 'extension/如真似幻/audio/sgs/outgame.mp3' },
								{ name: 'Pop', path: 'extension/如真似幻/audio/sgs/Pop.mp3' },
								{ name: 'Report01', path: 'extension/如真似幻/audio/sgs/Report01.mp3' },
								{ name: 'PopUp', path: 'extension/如真似幻/audio/sgs/PopUp.mp3' },
								{ name: 'TinyButton', path: 'extension/如真似幻/audio/sgs/TinyButton.mp3' },
								{ name: 'TinyWindow', path: 'extension/如真似幻/audio/sgs/TinyWindow.mp3' },
								{ name: 'Unlock', path: 'extension/如真似幻/audio/sgs/Unlock.mp3' },
								{ name: 'WinButton', path: 'extension/如真似幻/audio/sgs/WinButton.mp3' },
								{ name: 'QuickStart', path: 'extension/如真似幻/audio/sgs/QuickStart.mp3' },
							];

							//		console.log(PIXI.sound._sounds)
							pixiapp.view.style.position = 'absolute';
							pixiapp.view.style.left = '0px';
							pixiapp.view.style.zIndex = '0';
							pixiapp.view.style.top = '0px';
							//闪光
							let brightnessFilter = new PIXI.filters.AdjustmentFilter({
								gamma: 1,
							});
							//将包关闭变暗
							//console.log(lib.config.characters)
							const characterclose = new PIXI.filters.AdjustmentFilter({
								brightness: 0.5,
							});
							//载入图和背景图，留下开战骨骼变量
							let spinelo, uibg, spineks;
							const ppw = pixiapp.screen.width / 1103;
							const pph = pixiapp.screen.height / 514;
							const pps = Math.min(ppw, pph);
							//pixi加载器
							const xloader = new PIXI.Loader();
							//导入背景图
							xloader.add('spineloading', lib.assetURL + 'extension/如真似幻/spine/loding.skel');
							xloader.add('uiBG', lib.assetURL + 'extension/如真似幻/images/bg.jpg');
							xloader.add('wujiangBG', lib.assetURL + 'extension/如真似幻/images/wujiangbg.jpg');
							xloader.load(() => {
								spinelo = new PIXI.spine.Spine(xloader.resources.spineloading.spineData);
								uibg = new PIXI.Sprite(xloader.resources.uiBG.texture);
								uibg.width = pixiapp.screen.width;
								uibg.height = pixiapp.screen.height;
								//	uibg.scale.set(ppw, pph);
								pixiapp.stage.addChild(uibg, spinelo);
								pixiapp.stage.setChildIndex(uibg, 0)
								spinelo.state.setAnimationByName(0, 'idle', true, 0);
								spinelo.x = 0.5 * pixiapp.screen.width;
								spinelo.y = 0.5 * pixiapp.screen.height;
								spinelo.scale.set(1);
								btnmList.forEach(asset => {
									PIXI.sound.add(asset.name, lib.assetURL + asset.path);
								});
							})
							game.getFileList('extension/如真似幻/audio/music', function (floders) {
								window.rzshmusic = floders;
								//检索音乐包
								//获取异步传递的变量
								let rzshmusicpack = window.rzshmusic;
								delete window.rzshmusic;
								let rzshbgm;
								if (!lib.config.rzshbgm || !rzshmusicpack.includes(lib.config.rzshbgm)) {
									rzshbgm = rzshmusicpack[0];
								} else rzshbgm = lib.config.rzshbgm;
								PIXI.sound.add('outgame', { url: lib.assetURL + 'extension/如真似幻/audio/music/' + rzshbgm + '/outgame.mp3', loop: true })
								PIXI.sound.play('outgame');
								//对象池，用来管理容器和精灵
								const yloader = new PIXI.Loader();
								//主界面ui大盒子
								const uihome = new PIXI.Container();
								uihome.width = pixiapp.screen.width;
								uihome.height = pixiapp.screen.height;
								//主界面ui上面的为了做出抽屉效果,占据屏幕宽度和10%屏幕高度
								const uihometop = new PIXI.Container();
								uihometop.width = pixiapp.screen.width;
								uihometop.height = pixiapp.screen.height * 0.2;
								//主界面ui左边的,占据0.8高，0.2宽向下0.1高
								const uihomeleft = new PIXI.Container();
								uihomeleft.width = pixiapp.screen.width * 0.2;
								uihomeleft.height = pixiapp.screen.height * 0.9;
								uihomeleft.y = pixiapp.screen.height * 0.0705;
								//主界面右边的
								const uihomeright = new PIXI.Container();
								uihomeright.width = pixiapp.screen.width * 0.1;
								uihomeright.height = pixiapp.screen.height * 0.9;
								uihomeright.y = pixiapp.screen.height * 0.0705;
								uihomeright.x = pixiapp.screen.width * 0.9;
								//主界面下边的
								const uihomeunder = new PIXI.Container();
								uihomeunder.width = pixiapp.screen.width;
								uihomeunder.height = pixiapp.screen.height * 0.1;
								uihomeunder.y = 0.91 * pixiapp.screen.height
								//中间直接分别加入
								const uihomecenter = new PIXI.Container();
								uihomecenter.width = pixiapp.screen.width;
								uihomecenter.height = pixiapp.screen.height;
								//uihome把5个幕布加入进来
								uihome.addChild(uihometop, uihomeleft, uihomeright, uihomeunder);
								//模式盒子
								// 定义动画函数
								function showDrawer(container, direction) {
									let duration = 0.5;
									const ease = "power2.out";
									let start, end;
									switch (direction) {
										case "top":
											start = { y: -300 };
											end = { y: 0 };
											duration = 0.3;
											break;
										case "under":
											start = { y: 1.5 * pixiapp.screen.height };
											end = { y: 0.91 * pixiapp.screen.height };
											duration = 0.3;
											break;
										case "left":
											start = { x: -300 };
											end = { x: 0 };
											break;
										case "right":
											start = { x: 1.5 * pixiapp.screen.width };
											end = { x: pixiapp.screen.width * 0.9 };
											break;
										default:
											console.error(`Invalid direction: ${direction}`);
											return;
									}
									gsap.fromTo(container, duration, start, end, { ease }).restart();
								}
								function hideDrawer(container, direction) {
									let duration = 0.8;
									let ease = "power2.out";
									let start, end;
									switch (direction) {
										case "top":
											start = { y: -300 };
											end = { y: 0 };
											break;
										case "under":
											start = { y: 1.5 * pixiapp.screen.height };
											end = { y: pixiapp.screen.height * 0.91 };
											break;
										case "left":
											start = { x: -300 };
											end = { x: 0 };
											break;
										case "right":
											start = { x: 1.5 * pixiapp.screen.width };
											end = { x: pixiapp.screen.width * 0.9 };
											break;
										default:
											console.error(`Invalid direction: ${direction}`);
											return;
									}
									gsap.fromTo(container, duration, end, start, { ease }).restart();
								}
								uihome.on("added", () => {
									uihome.addChild(uihomecenter);
									showDrawer(uihometop, "top");
									showDrawer(uihomeunder, "under");
									showDrawer(uihomeleft, "left");
									showDrawer(uihomeright, "right");
								});
								const modehome = new PIXI.Container();
								modehome.width = pixiapp.screen.width;
								modehome.height = pixiapp.screen.height;
								//pixi载入ui,身份和斗地主的图片
								const assetList = [
									{ name: 'spritesui', path: 'extension/如真似幻/images/ui.json' },
									{ name: 'uilight', path: 'extension/如真似幻/images/light.json' },
									{ name: 'uiczg', path: 'extension/如真似幻/images/btn.json' },
									{ name: 'uivip', path: 'extension/如真似幻/images/vip.json' },
									{ name: 'rightact', path: 'extension/如真似幻/images/active/3.png' },
									{ name: 'pic', path: 'extension/如真似幻/images/avatar/2.png' },
								];

								assetList.forEach(asset => {
									yloader.add(asset.name, lib.assetURL + asset.path);
								});
								yloader.load(setupx);
								let ticker = new PIXI.Ticker();
								if (lib.config.scollannouncement) {
									let rzshbb = new PIXI.Graphics();
									rzshbb.beginFill(0x000000, 0.65);
									rzshbb.drawRect(0, 0, pixiapp.renderer.screen.width, 20);
									rzshbb.endFill(); uihome.addChild(rzshbb);
									var rzshgp = function () {
										let textcon = new PIXI.Container();
										textcon.widrh = pixiapp.screen.width;
										textcon.height = 0.1 * pixiapp.screen.height;
										textcon.name = 'textcon';
										rzshbb.addChild(textcon);
										var player = "玩家";
										var my = lib.config.connect_nickname;
										var suiji = ["氪金抽66", "卡宝真可爱", "蒸蒸日上", "√卡视我如父", "麒麟弓免疫枸杞", "坏可宣（老坏批）", "六千大败而归", '蒸', '夕宝', '黄小花', '山猪',
											"开局酒古锭", "遇事不决刷个乐", "见面两刀喜相逢", "改名出66", "时代的六万五", "韩旭", "司马长衫", "ogx",
											"狗卡不如无名杀", "王八万", "一拳兀突骨", "开局送神将", "丈八二桃", "装甲车车", "等我喝口酒", "Samuri", "马", "kimo鸡～木木",
											"Log-Frunki", "aoe银钱豹", "没有丈八就托管", "无中yyds", "给咸鱼鸽鸽打call", "小零二哟～", "长歌最帅了",
											"大猫有侠者之风", "布灵布灵❤️", "我爱～摸鱼🐠～", "小寻寻真棒", "呲牙哥超爱笑", "是俺杀哒", "阿七阿七",
											"祖安·灰晖是龙王", "吃颗桃桃好遗计", "好可宣✓良民", "藏海表锅好", "金乎？木乎？水乎！！", "无法也无天", "西风不识相",
											"神秘喵酱", "星城在干嘛？", "子鱼今天摸鱼了吗？", "阳光苞里有阳光", "诗笺的小裙裙", "轮回中的消逝", "乱踢jb的云野",
											"小一是不是...是不是...", "美羊羊爱瑟瑟", "化梦的星辰", "杰哥带你登dua郎", "世中君子人", "叹年华未央", "短咕咕", "若石", "很可爱的小白", "沉迷踢jb的云野", "厉不厉害你坤哥", "东方太白", "恶心的死宅", "风回太初", "隔壁的戴天", "林柒柒", "洛神", "ikun", "蒙娜丽喵", "只因无中", "女宝", "远道", "翘课吗？", "失败的man", "晚舟", "叙利亚野🐒", "幸运女神在微笑", "知天意，逆天寒", "明月栖木", "路卡利欧", "兔兔", "香蕉", "douyun", "启明星阿枫", "雨夜寒稠",
											"洛天依？！", "黄老板是好人～", "来点瑟瑟文和", "鲨鱼配辣椒", "萝卜～好萝卜", "废城君", "E佬细节鬼才",
											"感到棘手要怀念谁？", "半价小薯片", "JK欧拉欧拉欧拉", "新年快乐", "乔姐带你飞", "12345678？", "缘之空", "小小恐龙", "教主：杀我！", "才思泉涌的司马", "我是好人", "喜怒无常的大宝", "黄赌毒", "阴间杀～秋", "敢于劈瓜的关羽", "暮暮子", "潜龙在渊"
										].randomGet();
										var name = [suiji, my].randomGet();
										var v = ["通过", "使用", "开启"].randomGet();
										var story = ["周年", "五一", "踏青", "牛年", "开黑", "冬至", "春分", "鼠年", "盛典", "魏魂", "群魂", "蜀魂",
											"吴魂", "猪年", "圣诞", "国庆", "狗年", "金秋", "奇珍", "元旦", "小雪", "冬日", "招募", "梦之回廊",
											"虎年", "新春", "七夕", "大雪", "端午", "武将", "中秋", "庆典"
										].randomGet();
										var box = ["盒子", "宝盒", "礼包", "福袋", "礼盒", "庆典", "盛典"].randomGet();
										var a = "获得了";
										//皮肤
										var pifu = ["界钟会×1", "王朗×1", "马钧×1", "司马昭×1", "司马师×1", "王平×1", "诸葛瞻×1", "张星彩×1",
											"董允×1", "关索×1", "骆统×1", "周处*1", "界步练师*1", "界朱然*1", "贺齐*1", "苏飞*1", "公孙康×1",
											"杨彪×1", "刘璋×1", "张仲景×1", "司马徽×1", "曹婴×1", "徐荣×1", "史诗宝珠*66", "史诗宝珠*33",
											"麒麟生角·魏延*1", "史诗宝珠*10", "刘焉×1", "孙寒华×1", "戏志才×1", "界曹真×1", "曹婴×1", "王粲×1",
											"界于禁×1", "郝昭×1", "界黄忠×1", "鲍三娘×1", "周群×1", "赵襄×1", "马云禄×1", "孙皓×1", "留赞×1",
											"吴景×1", "界徐盛×1", "许攸×1", "杜预×1", "界李儒×1", "张让×1", "麹义×1", "司马徽×1", "界左慈×1",
											"鲍三娘×1", "界徐盛×1", "南华老仙×1", "韩旭の大饼*100", "神郭嘉×1", "吴景×1", "周处×1", "杜预×1",
											"司马师×1", "羊微瑜×1", "神曹操×1"
										].randomGet();
										//武将
										var wujiang = ["谋定天下·陆逊*1（动+静）", "龙困于渊·刘协（动+静）*1", "星花柔矛·张星彩*1（动+静）",
											"呼啸生风·许褚*1（动+静）", "牛年立冬·司马懿*1（动+静）", "鹰视狼顾·司马懿*1（动+静）", "洛水神韵·甄姬*1（动+静）",
											"登锋陷阵·张辽*1（动+静）", "十胜十败·郭嘉*1（动+静）", "猪年端午·曹丕*1（动+静）", "背水一战·张郃*1（动+静）",
											"神兵天降·邓艾*1（动+静）", "独来固志·王基*1（动+静）", "猪年圣诞·刘备*1（动+静）", "哮风从龙·关羽*1（动+静）",
											"西凉雄狮·马超*1（动+静）", "鏖战赤壁·黄盖*1（动+静）", "星流霆击·孙尚香*1（动+静）", "猪年圣诞·陆逊*1（动+静）",
											"鼠年七夕·貂蝉*1（动+静）", "迅雷风烈·张角*1（动+静）", "一往无前·袁绍*1（动+静）", "盛气凌人·许攸*1（动+静）",
											"玄冥天通·神曹操*1（动+静）", "魂牵梦绕·灵雎*1（动+静）", "肝胆相照·⭐甘宁*1（动+静）", "超脱于世·庞德公*1（动+静）",
											"雄踞益州·刘焉*1（动+静）", "鼠年春节·兀突骨*1（动+静）", "牛年端午·孙鲁班*1（动+静）", "灵魂歌王·留赞*1（动+静）",
											"花容月貌·孙茹*1（动+静）", "猪年春节·孙鲁育*1（动+静）", "长沙桓王·孙笨*1（动+静）", "如花似朵·小乔*1（动+静）",
											"嫣然一笑·鲍三娘*1", "锐不可当·张翼*1（动+静）", "鼠年中秋·关索*1（动+静）", "花海舞枪·马云禄*1（动+静）",
											"木牛流马·黄月英*1（动+静）", "锋芒毕露·曹婴*1（动+静）", "长坂败备·曹纯*1（动+静）", "龙袭星落·王朗*1（动+静）",
											"举棋若定·戏志才*1（动+静）", "泰山捧日·程昱*1（动+静）", "冬日·王元姬（动态+静态）*1",
											"牛年七夕·步练师动态包*1（动+静）", "神甘宁×1", "巾帼花舞·马云禄*1（动+静）", "银币*66666", "将魂*66666",
											"琪花瑶草·徐氏*1（动+静）", "肝胆相照·星甘宁*1（动+静）", "星流霆击·孙尚香（动+静）*1", "锋芒毕露·曹婴*1（动+静）", "长衫の天牢令*100"
										].randomGet();
										//更改对应播报颜色

										var d = [",大家快恭喜TA吧！", ",大家快恭喜TA吧。无名杀是一款非盈利游戏(づ ●─● )づ", ",祝你新的一年天天开心，万事如意"].randomGet();
										var fontset = 'shousha';
										var colorA = '#efe8dc';
										var colorB = '#22c622';
										var gold = [new PIXI.Text(`${pifu}`, { fontFamily: fontset, fontSize: 18, fill: '#56e4fa' }), new PIXI.Text(`${wujiang}`, { fontFamily: fontset, fontSize: 18, fill: "#f3c20f" })].randomGet();
										let text = new PIXI.Text(`${player}`, { fontFamily: fontset, fontSize: 18, fill: colorA });
										text.addChild(new PIXI.Text(`${name}`, { fontFamily: fontset, fontSize: 18, fill: colorA }));
										text.addChild(new PIXI.Text(`${v}`, { fontFamily: fontset, fontSize: 18, fill: "white" }));
										text.addChild(new PIXI.Text(`${story}${box}`, { fontFamily: fontset, fontSize: 18, fill: colorB }));
										text.addChild(new PIXI.Text(`${a}`, { fontFamily: fontset, fontSize: 18, fill: "white" }));
										text.addChild(gold);
										text.addChild(new PIXI.Text(`${d}`, { fontFamily: fontset, fontSize: 18, fill: 'white' }));
										// 设置文本对象的布局
										text.children.forEach((child, index) => {
											child.x = (index > 0 ? text.children[index - 1].x + text.children[index - 1].width + 1 : text.width);
											child.y = 0;
										});
										textcon.x = pixiapp.screen.width;
										// 将文本对象添加到舞台上
										textcon.addChild(text);
										window.bbgp = true;
										window.bbcount = 0;
									}
									rzshgp();
									ticker.add(updatet);
									ticker.start();
									function updatet(delta) {
										if (window.bbgp == false) {
											window.bbcount++;
											if (window.bbcount > 1000 && Math.random() < 0.01) {
												rzshbb.visible = true;
												rzshgp();
											}
										}
										if (window.bbgp == true) {
											let textcon = rzshbb.getChildByName('textcon');
											textcon.x -= 1.5;
											if (textcon.x < -700 * ppw) {
												textcon.destroy();
												if (Math.random() < 0.8) {
													rzshgp();
												} else {
													rzshbb.visible = false;
													window.bbgp = false;
												}
											}
										}
									}
								}
								//打开场景
								function opeen(container) {
									if (container != uihome) {
										window.isOnhide = true;
										uihome.removeChild(uihomecenter);
										hideDrawer(uihometop, "top");
										hideDrawer(uihomeunder, "under");
										hideDrawer(uihomeleft, "left");
										hideDrawer(uihomeright, "right");
										setTimeout(function () {
											window.isOnhide = false;
											pixiapp.stage.removeChild(uihome);
										}, 500);
										pixiapp.stage.addChild(container);
									} else {
										pixiapp.stage.children.forEach(function (child) {
											if (child !== uibg) {
												pixiapp.stage.removeChild(child);
											}
										});

										pixiapp.stage.addChild(container);
									}
									window.container = container;
								}
								//关闭场景时回到父级场景
								function closee() {
									opeen(uihome);
								}
								function uiinit(sprite, bool) {
									const name = sprite.name;
									if (bool !== undefined) {
										sprite.interactive = true;
										sprite.on('pointerup', onButtonUpx);
										sprite.on('pointerdown', onButtonDownx);
									}
									if (!uisprite[name]) return;
									sprite.x = uisprite[name].x * ppw;
									sprite.y = uisprite[name].y * pph;
									sprite.anchor.set(0.5);
									sprite.scale.set(uisprite[name].scale * ppw, uisprite[name].scale * pph);
								}
								function uiinit2(fromFrames) {
									fromFrames.anchor.set(0.5);
									fromFrames.scale.set(0.29 * pps);
								}
								//首屏加载
								function setupx() {
									console.timeEnd('y加载完毕')
									let pica = new PIXI.Sprite(yloader.resources.pic.texture);
									pica.name = 'pica';
									uiinit(pica);
									uihometop.addChild(pica);
									uihometop.setChildIndex(pica, 0)
									//先把模式后面的图片占位。
									const mode1bbg = new PIXI.Sprite();
									mode1bbg.name = 'mode1bbg';
									//经典场和斗地主等文字     
									const mode1tt = new PIXI.Sprite();
									mode1tt.name = 'mode1tt';
									const secmode1 = new PIXI.Sprite();
									//左上角模式信息
									const secmodeinfo = new PIXI.Sprite();
									secmodeinfo.position.set(340 * ppw, 90 * pph);
									secmodeinfo.scale.set(pps);
									//三个按钮    
									const modesecoff1 = new PIXI.Sprite();
									modesecoff1.name = 'modesecoff1';
									modesecoff1.interactive = true;
									modesecoff1.on('pointerup', onButtonUp);
									modesecoff1.on('pointerdown', onButtonDownx);
									const modesecoff2 = new PIXI.Sprite();
									modesecoff2.name = 'modesecoff2';
									modesecoff2.interactive = true;
									modesecoff2.on('pointerup', onButtonUp);
									modesecoff2.on('pointerdown', onButtonDownx);
									const modesecoff3 = new PIXI.Sprite();
									modesecoff3.name = 'modesecoff3';
									modesecoff3.interactive = true;
									modesecoff3.on('pointerup', onButtonUp);
									modesecoff3.on('pointerdown', onButtonDownx);
									uiinit(modesecoff1);
									uiinit(modesecoff2);
									uiinit(modesecoff3);
									//模式文字 
									secmode1.name = '5pjz';
									const secmode2 = new PIXI.Sprite();
									secmode2.name = '8pjz';
									const secmode3 = new PIXI.Sprite();
									secmode3.name = 'guowar';
									modehome.on("added", () => {
										let modestexture = yloader.resources.modesecb.textures;
										if (window.moode == "shenfen") {
											//把左上角改掉     
											mode1bbg.texture = zloader.resources.shenfen.texture;
											uiinit(mode1bbg);
											//切换底图      
											mode1tt.texture = modestexture['mode1tt'];
											//切换文字
											secmode1.texture = modestexture['5pjz'];
											secmode2.texture = modestexture['8pjz'];
											secmode3.texture = modestexture['guowar'];
											secmodeinfo.texture = modestexture['5pjz'];
											modesecoff1.texture = modestexture['modesecon'];
											modesecoff2.texture = modestexture['modesecoff'];
											modesecoff3.texture = modestexture['modesecoff'];
											spineks.state.setAnimationByName(0, 'kaishi', false, 0);
											spineks.state.addAnimationByName(0, 'jingzhi', true, 0);
											entermodegame('identity', 'normal', 5)
										}
										else if (window.moode == "doudizhu") {
											mode1bbg.texture = zloader.resources.doudizhu.texture;
											uiinit(mode1bbg);
											mode1bbg.scale.set(0.57 * pps);
											mode1bbg.x -= 115 * ppw;
											// mode1bbg.y+=5;
											mode1tt.texture = modestexture['hhddz'];
											secmode1.texture = modestexture['ddzxx'];
											secmode2.texture = modestexture['ddzhl'];
											secmode3.texture = modestexture['ddzbl'];
											secmodeinfo.texture = modestexture['ddzxx'];
											modesecoff1.texture = modestexture['modesecon'];
											modesecoff2.texture = modestexture['modesecoff'];
											modesecoff3.texture = modestexture['modesecoff'];
											spineks.state.setAnimationByName(0, 'kaishi', false, 0);
											spineks.state.addAnimationByName(0, 'jingzhi', true, 0);
											entermodegame('doudizhu', 'normal');
										}
									});
									modehome.on("removed", () => {
									})
									function onButtonUp(event) {
										//获取模式纹理
										let modestexture = yloader.resources.modesecb.textures;
										if (window.currentSprite != event.target) return;
										window.currentSprite = null;
										switch (event.target.name) {
											case "mode1":
												//身份局，影响后面的按钮    
												window.moode = 'shenfen';
												opeen(modehome);
												break;
											case "uactive1":
												window.moode = 'doudizhu';
												opeen(modehome);
												break;
											case "modesecoff1":
												modesecoff1.texture = modestexture['modesecon'];
												modesecoff2.texture = modestexture['modesecoff'];
												modesecoff3.texture = modestexture['modesecoff'];
												if (window.moode == 'shenfen') {
													secmodeinfo.texture = modestexture['5pjz'];
													entermodegame('identity', 'normal', 5);
												}
												if (window.moode == 'doudizhu') {
													secmodeinfo.texture = modestexture['ddzxx'];
													entermodegame('doudizhu', 'normal');
												}
												spineks.state.setAnimationByName(0, 'kaishi', false, 0);
												spineks.state.addAnimationByName(0, 'jingzhi', true, 0);
												break;
											case "modesecoff2":
												modesecoff1.texture = modestexture['modesecoff'];
												modesecoff2.texture = modestexture['modesecon'];
												modesecoff3.texture = modestexture['modesecoff'];
												if (window.moode == 'shenfen') {
													secmodeinfo.texture = modestexture['8pjz'];
													entermodegame('identity', 'normal', '8');
												}
												if (window.moode == 'doudizhu') {
													secmodeinfo.texture = modestexture['ddzhl'];
													entermodegame('doudizhu', 'huanle');
												}
												spineks.state.setAnimationByName(0, 'kaishi', false, 0);
												spineks.state.addAnimationByName(0, 'jingzhi', true, 0);
												// entermodegame('identity','normal','8');
												break;
											case "modesecoff3":
												modesecoff1.texture = modestexture['modesecoff'];
												modesecoff2.texture = modestexture['modesecoff'];
												modesecoff3.texture = modestexture['modesecon'];
												if (window.moode == 'shenfen') {
													secmodeinfo.texture = modestexture['guowar'];
													entermodegame('guozhan')
												}
												if (window.moode == 'doudizhu') {
													secmodeinfo.texture = modestexture['ddzbl'];
													entermodegame('doudizhu', 'binglin')
												}
												spineks.state.setAnimationByName(0, 'kaishi', false, 0);
												spineks.state.addAnimationByName(0, 'jingzhi', true, 0);
												// entermodegame('guozhan')      
												break;
											case "mode2":
												oppeen(paiweihome)
												break;
											case "mode3":
												let freegameModes = [
													['single', 'dianjiang'],
													['identity', 'normal', 5],
													['identity', 'normal', 8],
													['doudizhu', 'huanle'],
													['guozhan'],
													['doudizhu', 'binglin'],
													['doudizhu', 'normal'],
													['identity', 'zhong'],
													['identity', 'purple'],
													['versus', 'two'],
													['versus', 'four']
												];
												const randomIndex = Math.floor(Math.random() * freegameModes.length);
												entermodegame(...freegameModes[randomIndex]);
												rzshkz()
												break;
											case "mode4":
												entermodegame('brawl');
												rzshkz();
												break;
											case "under6":
												oppeen(wujianghome)
												break;

											default:
											//console.log(event.target.name)
										}
									}
									function onButtonDown(event) {
										var sprite = event.target;
										window.currentSprite = event.target;
										var scalex = sprite.scale.x;
										var scaley = sprite.scale.y;
										switch (sprite.name) {
											case "mode1":
											case "mode2":
											case "mode3":
											case "mode4":
												PIXI.sound.play('PopUp')
												if (sprite.isOndown != true) {
													sprite.isOndown = true;
													gsap.to(sprite.scale, {
														duration: 0.15,
														x: 0.8 * scalex,
														y: 0.8 * scaley,
														ease: "power2.inOut",
														onComplete: () => {
															// 使用 gsap 库创建 Tween 对象，将精灵恢复到原始大小
															gsap.to(sprite.scale, {
																duration: 0.15,
																x: scalex,
																y: scaley,
																ease: "power2.inOut",
																onComplete: () => { sprite.isOndown = false; }
															});
														}
													});
												}
												break;
											case 'uactive1':
												PIXI.sound.play('PopUp')
												break;
											//	case "spinekz":						
											//	break;
											default:
												PIXI.sound.play('Label')
												sprite.filters = [brightnessFilter];
												// 使用 gsap 库创建 Tween 对象，使亮度调整滤镜在一定时间内慢慢增加到 4
												gsap.to(brightnessFilter, {
													duration: 0.5,
													ease: "power2.inOut",
													gamma: 3,
													onUpdate: () => {
														sprite.filters = [brightnessFilter];
													},
													onComplete: () => {
														sprite.filters = null;
													}
												});
										}
									}

									//ui主纹理
									const spritesheet = yloader.resources.spritesui.textures;
									//灯的静纹理
									const lightsheet = yloader.resources.uilight.textures;
									//灯的动纹理
									const lightanimations = yloader.resources.uilight.data.animations;
									//vip
									const vipsprite = yloader.resources.uivip.textures;
									//藏珍阁
									const czgsprite = yloader.resources.uiczg.data.animations;
									//创建函数，输入一个名字，自动在纹理集里检索对应名字，然后赋名，然后输出
									//这是ui里不可交互元素
									function rzshcreate(name) {
										const sprite = new PIXI.Sprite(spritesheet[name]);
										sprite.name = name;
										return sprite;
									}
									//这是ui可交互元素
									function rzshcreatex(name) {
										const sprite = new PIXI.Sprite(spritesheet[name]);
										sprite.name = name;
										sprite.interactive = true;
										sprite.on('pointerdown', onButtonDown);
										sprite.on('pointerup', onButtonUp);
										return sprite;
									}
									//从vip包里拿东西
									function vipcreat(name) {
										const sprite = new PIXI.Sprite(vipsprite[name]);
										sprite.name = name;
										sprite.interactive = true;
										sprite.on('pointerdown', onButtonDown);
										sprite.on('pointerup', onButtonUp);
										return sprite;
									}
									//这是灯里的可交互
									function lightcreat1(name) {
										const sprite = new PIXI.Sprite(lightsheet[name]);
										sprite.name = name;
										sprite.interactive = true;
										sprite.on('pointerdown', onButtonDown);
										sprite.on('pointerup', onButtonUp);
										return sprite;
									}
									//这是灯的动态交互
									function lightcreat2(name) {
										const fromFrames = new PIXI.AnimatedSprite.fromFrames(lightanimations[name])
										fromFrames.name = name;
										fromFrames.interactive = true;
										fromFrames.animationSpeed = 1;
										fromFrames.play();
										fromFrames.on('pointerdown', onButtonDown);
										fromFrames.on('pointerup', onButtonUp);
										return fromFrames;
									}
									//从藏珍阁里拿东西
									function czgcreat(name) {
										const fromFrames = new PIXI.AnimatedSprite.fromFrames(czgsprite[name])
										fromFrames.name = name;
										fromFrames.interactive = true;
										fromFrames.animationSpeed = 0.5;
										fromFrames.play();
										fromFrames.on('pointerdown', onButtonDown);
										fromFrames.on('pointerup', onButtonUp);
										return fromFrames;
									}
									yloader.add('modesecb', lib.assetURL + 'extension/如真似幻/images/mode.json');
									yloader.add('spinekss', lib.assetURL + 'extension/如真似幻/spine/kaizhan.skel');
									yloader.load(() => {
										//mode里的点击事件
										function onButtonUp(event) {
											event.target.alpha = 1;
											switch (event.target.name) {
												case "spinekz":
													//	spineks.destroy();
													rzshkz();
													break;
												default:
												//	console.log(event.target.name);
											}
										}
										let modestexture = yloader.resources.modesecb.textures;
										function modecreate(name) {
											const sprite = new PIXI.Sprite(modestexture[name]);
											sprite.name = name;
											return sprite;
										}
										//这是模式可交互元素
										function modecreatex(name) {
											const sprite = new PIXI.Sprite(modestexture[name]);
											sprite.name = name;
											sprite.interactive = true;
											//sprite.on('pointerdown', onButtonDown);
											sprite.on('pointerup', onButtonUp);
											sprite.on('pointerdown', onButtonDown);
											return sprite;
										}
										//透明框背景
										const modesecbg = modecreate('modesecbg');
										uiinit(modesecbg);
										modehome.addChild(modesecbg);
										modehome.setChildIndex(modesecbg, 0);
										//mode后面大图，可切换成不同的图  
										uiinit(mode1bbg);
										modehome.addChild(mode1bbg);
										//模式下面的墨迹    
										const modetta = modecreate('modettb');
										uiinit(modetta);
										modehome.addChild(modetta);
										//这个地方是经典场和斗地主切换    
										uiinit(mode1tt);
										modehome.addChild(mode1tt);
										//三个选项按钮    
										modehome.addChild(modesecoff1, modesecoff2, modesecoff3);
										//问好按钮，    
										const whelp = modecreate('whelp');
										uiinit(whelp);
										modehome.addChild(whelp);
										//这是可切换的游戏模式，5人，8人，国战，切成斗地主就是休闲，欢乐，兵临    
										uiinit(secmode1);
										uiinit(secmode2);
										uiinit(secmode3);
										modehome.addChild(secmode1, secmode2, secmode3);
										//左上角模式信息
										modehome.addChild(secmodeinfo);
										//右上角关闭按钮    
										const rzclose = rzshcreate('rzclose');
										uiinit(rzclose, true);
										rzclose.x = pixiapp.screen.width - rzclose.width * rzclose.scale.x
										modehome.addChild(rzclose);
										//开战骨骼    
										spineks = new PIXI.spine.Spine(yloader.resources.spinekss.spineData);
										//				   	let animations = spineks.stateData.skeletonData.animations;

										// 遍历动作列表，打印每个动作的名称
										//  for (let i = 0; i < animations.length; i++) {
										//   console.log(animations[i].name);
										//  }
										spineks.name = 'spinekz';
										spineks.interactive = true;
										spineks.on('pointerup', onButtonUp);
										spineks.on('pointerdown', onButtonDown);
										modehome.addChild(spineks);
										spineks.x = 800 * ppw;
										spineks.y = 300 * pph;
										spineks.scale.set(0.7 * pps);
									})
									//按下面的格式创建所有的ui界面元素
									//左边边框直接放进主容器里
									const leftlong = rzshcreate('leftlong');
									uiinit(leftlong);
									uihomeleft.addChild(leftlong);
									uihomeleft.setChildIndex(leftlong, 0)
									//下面是上幕布的元素 
									//官阶和灯的带子
									const guan = rzshcreate('guan');
									uiinit(guan);
									//头像框，这是可点击的
									const avatar = rzshcreatex('avatar');
									uiinit(avatar);
									uihometop.addChild(guan, avatar);
									//名字
									const rzshuname = new PIXI.Text(lib.config.connect_nickname);
									// 设置字体、字号和颜色，字体不生效，因为字体载入太慢
									rzshuname.style.fontFamily = 'shousha';
									rzshuname.style.fontSize = 14;
									rzshuname.position.set(170 * ppw, 4 * pph);
									rzshuname.style.fill = '#C0C0C0';
									//等级
									const rzshlv = new PIXI.Text('Lv180');
									rzshlv.style.fontFamily = 'shousha';
									rzshlv.style.fontSize = 13;
									rzshlv.position.set(250 * ppw, 3 * pph);
									rzshlv.style.fill = '#DAA520';
									uihometop.addChild(rzshuname, rzshlv)
									//灯，全是可点击的
									const lightarr = ['biao', 'fen', 'lin', 'huo', 'shan', 'yin', 'lei', 'shen', 'phone', 'linju', 'guo', 'yijiang', 'erjiang', 'sanjiang', 'sijiang', 'wujiang', 'liujiang', 'qijiang', 'sp', 'zhi', 'xin', 'ren', 'yon', 'yan'];
									const lightstop = ['yin', 'lei', 'shen', 'phone', 'linju', 'wujiang', 'liujiang', 'qijiang']
									for (let i = 0; i < lightarr.length; i++) {
										const name = lightarr[i];;
										var light;
										var j, k;
										if (i <= 15) {
											j = 224 + 24 * i;
											k = 50;
										} else {
											j = 24 * i - 160;
											k = 73;
										}
										if (!lightstop.includes(name)) {
											light = lightcreat2(name);
											uiinit2(light);
											light.x = ppw * j;
											light.y = pph * k;
											uihometop.addChild(light);
										}
										else {
											light = lightcreat1(name)
											uiinit2(light);
											light.x = ppw * j;
											light.y = pph * k;
											uihometop.addChild(light);
										}
									}
									//这是小人，不可点击      
									const player_nan = rzshcreate('player_nan');
									uiinit(player_nan);
									//这是升级图标，可交互
									const lvlup = rzshcreatex('lvlup');
									uiinit(lvlup);
									//这是官阶图标，可交互
									const guanico = rzshcreatex('大元帅');
									uiinit(guanico);
									//下面是vip和元宝可交互    
									const vipbg1 = rzshcreatex('vipbg1');
									uiinit(vipbg1);
									const vip_v7 = vipcreat('vip_v7');
									vip_v7.x = 417 * ppw;
									vip_v7.y = 5 * pph;
									vip_v7.scale.set(0.5 * pps);
									const vipbg2 = rzshcreatex('vipbg2');
									uiinit(vipbg2);
									//元宝数   
									const vipmoney = new PIXI.Text('20000');
									// 设置字体、字号和颜色，字体不生效，因为字体载入太慢
									vipmoney.style.fontFamily = 'shousha';
									vipmoney.style.fontSize = 16;;
									vipmoney.position.set(600 * ppw, 10 * pph);
									vipmoney.style.fill = '#C0C0C0';
									uihometop.addChild(player_nan, lvlup, guanico, vipbg1, vip_v7, vipbg2, vipmoney);
									//下面是右边的4个底圈，不可交互        
									for (let i = 0; i <= 3; i++) {
										const rightbg = rzshcreate('rightbg');
										uiinit(rightbg);
										rightbg.x = rightbg.x + (i * 64) * ppw;
										uihometop.addChild(rightbg);
									}
									//这是右上角的四个图，可交互
									const right1 = rzshcreatex('right2');
									uiinit(right1);
									uihometop.addChild(right1);
									const right2 = rzshcreatex('right3');
									uiinit(right2);
									uihometop.addChild(right2);
									const right4 = rzshcreatex('right44');
									uiinit(right4);
									uihometop.addChild(right4);
									const yukasaoguang = czgcreat('yukasaoguang');
									uiinit(yukasaoguang);
									yukasaoguang.animationSpeed = 0.3;
									uihometop.addChild(yukasaoguang);
									//上边预留玩家姓名，灯，vip等级，玩家头像，玩家等级，元宝数量
									//左边四个图标，可交互
									const left1 = rzshcreatex('left1');
									uiinit(left1);
									const left2 = rzshcreatex('left2');
									uiinit(left2);
									const left3 = rzshcreatex('left3');
									uiinit(left3);
									const left4 = rzshcreatex('left4');
									uiinit(left4);
									uihomeleft.addChild(left1, left2, left3, left4);
									//中间的mode区，可交互         
									const mode1 = rzshcreatex('mode1');
									uiinit(mode1);
									const mode2 = rzshcreatex('mode2');
									uiinit(mode2);
									const mode3 = rzshcreatex('mode3');
									uiinit(mode3);
									const mode4 = rzshcreatex('mode4');
									uiinit(mode4);
									uihomecenter.addChild(mode1, mode2, mode3, mode4, mode4);
									uihomecenter.on('added', () => {
										//uihome.addChild(uihomecenter);
										flyIn(mode1, 0.4);
										flyIn(mode2, 0.4);
										flyIn(mode3, 0.4);
										flyIn(mode4, 0.5);
									})

									//右边活动区
									const ro2 = rzshcreatex('ro2');
									uiinit(ro2);
									const rightacbg = rzshcreatex('rightacbg');
									uiinit(rightacbg);
									//活动图片    
									const riactexture = yloader.resources.rightact.texture;
									const riactive = new PIXI.Sprite(riactexture);
									riactive.name = 'riactive';
									uiinit(riactive);
									const czg = czgcreat('czg');
									uiinit(czg);
									uihomeright.addChild(ro2, rightacbg, riactive, czg);
									//留活动图片和藏珍阁接口 
									//下边
									const say = rzshcreatex('say');
									uiinit(say);
									//活动框，不能交互         
									const actbk = rzshcreate('actbk');
									uiinit(actbk);
									const uactive1 = rzshcreatex('uactive1');
									uiinit(uactive1);
									const actak = rzshcreate('actak');
									uiinit(actak);
									uihomeunder.addChild(say, actbk, uactive1, actak);
									//活动场和斗地主，可以交互 
									const activeea = rzshcreatex('activeea');
									uiinit(activeea);
									uihomeunder.addChild(activeea);
									for (let i = 0; i <= 5; i++) {
										const rightbg = rzshcreate('rightbg');
										uiinit(rightbg);
										rightbg.x = rightbg.x + (i * 78 - 284.5) * ppw;
										rightbg.y = 7.5 * pph;
										rightbg.scale.set(0.64 * pps)
										uihomeunder.addChild(rightbg);
									}
									//下边6个按钮，可交互     
									const under1 = rzshcreatex('under1');
									uiinit(under1);
									const shop = czgcreat('shop');
									uiinit(shop);
									shop.animationSpeed = 0.3;
									const under3 = rzshcreatex('under3');
									uiinit(under3);
									const under4 = rzshcreatex('under4');
									uiinit(under4);
									const under5 = rzshcreatex('under5');
									uiinit(under5);
									const under6 = rzshcreatex('under6');
									uiinit(under6);
									//右下角的十字按键
									const menu1 = rzshcreate('menu1')
									uiinit(menu1, true);
									menu1.x = pixiapp.screen.width - menu1.width / 4;
									uihomeunder.addChild(under1, shop, under3, under4, under5, under6, menu1);
									//将主ui加到舞台上显示                  
									setTimeout(function () {
										opeen(uihome);
										try {
											spinelo.destroy();
										}
										catch (err) {
										}
									}, 1500);
									zloader.load(setupz)
								}
								//排位房间主体,左右两个盒子用来放龙头和按钮
								const paiweihome = new PIXI.Container();
								const paiweihomeleft = new PIXI.Container();
								const paiweihomeright = new PIXI.Container();
								paiweihome.width = pixiapp.screen.width;
								paiweihome.height = pixiapp.screen.height;
								paiweihomeleft.width = 0.3 * pixiapp.screen.width;
								paiweihomeleft.x = 0.1 * pixiapp.screen.width;
								paiweihomeleft.height = pixiapp.screen.height;
								paiweihomeright.width = 0.3 * pixiapp.screen.width;
								paiweihomeright.height = pixiapp.screen.height;
								paiweihomeright.x = 0.6 * pixiapp.screen.width;
								const paiweihometop = new PIXI.Container();
								paiweihometop.width = 0.4 * pixiapp.screen.width;
								paiweihometop.height = 0.3 * pixiapp.screen.height;
								paiweihome.addChild(paiweihometop, paiweihomeleft, paiweihomeright)
								//排位
								function paiweicreate(name) {
									const sprite = new PIXI.Sprite(zloader.resources.paiweiui.textures[name]);
									sprite.name = name;
									return sprite;
								}
								//龙头
								function paiweicreatey(name) {
									let fromFrames = new PIXI.AnimatedSprite.fromFrames(zloader.resources.paiweiui.data.animations[name])
									fromFrames.name = name;
									fromFrames.anchor.set(0.5);
									fromFrames.animationSpeed = 0.3;
									fromFrames.play();
									return fromFrames;
								}
								//菜单
								const menuhome = new PIXI.Container();
								menuhome.width = pixiapp.screen.width;
								menuhome.height = pixiapp.screen.height;
								const menuhomeunder = new PIXI.Container();
								menuhomeunder.width = pixiapp.screen.width;
								menuhomeunder.height = pixiapp.screen.height;
								//遮罩防止影响下面
								let menu_hitArea = new PIXI.Graphics();
								menu_hitArea.beginFill(0x000000, 0.8);
								menu_hitArea.drawRect(0, 0, pixiapp.renderer.screen.width, pixiapp.renderer.screen.height);
								menu_hitArea.endFill();
								menu_hitArea.interactive = true;
								menuhome.addChild(menu_hitArea, menuhomeunder);
								function menucreate(name) {
									const sprite = new PIXI.Sprite(zloader.resources.menubtn.textures[name]);
									sprite.name = name;
									return sprite;
								}
								menuhome.on("added", () => {
									gsap.fromTo(//上面抽屉
										menuhomeunder,
										{ y: pixiapp.screen.height + menuhomeunder.height },
										{ duration: 0.5, y: 0, ease: "power4.out" });
								})
								//设置菜单场景
								let settinghome = new PIXI.Container();
								settinghome.width = pixiapp.screen.width;
								settinghome.height = pixiapp.screen.height;
								//带框的图层
								let settingbg = new PIXI.Container();
								settingbg.width = pixiapp.screen.width;
								settingbg.height = pixiapp.screen.height;
								//菜单底罩，点击时收起菜单
								let setting_hitArea = new PIXI.Graphics();
								setting_hitArea.beginFill(0x000000, 0.5);
								setting_hitArea.drawRect(0, 0, pixiapp.renderer.screen.width, pixiapp.renderer.screen.height);
								setting_hitArea.endFill();
								setting_hitArea.interactive = true;
								setting_hitArea.on('pointerup', () => {
									uihome.removeChild(settinghome)
								})
								settinghome.addChild(setting_hitArea, settingbg);
								settinghome.on('added', () => {
									let set_dialog = settingbg.getChildByName('set_dialog');
									set_dialog.getChildByName('setab1').texture = zloader.resources.setting.textures['set_tab_choose'];
									set_dialog.getChildByName('setab2').texture = zloader.resources.setting.textures['set_tab'];
									set_dialog.getChildByName('setab3').texture = zloader.resources.setting.textures['set_tab'];
									set_dialog.removeChild(settingright2);
									set_dialog.removeChild(settingright3);
									set_dialog.addChild(settingright1);
								});
								//下面是3个设置选项的右侧具体选项框；
								let settingright1 = new PIXI.Container();
								let settingright2 = new PIXI.Container();
								let settingright3 = new PIXI.Container();
								//z加载器加载排位,身份，斗地主和十字键的图片数据
								const zloader = new PIXI.Loader();
								const assetListz = [
									{ name: 'menubtn', path: 'extension/如真似幻/images/menu.json' },
									{ name: 'paiweiui', path: 'extension/如真似幻/images/jj.json' },
									{ name: 'shenfen', path: 'extension/如真似幻/images/modeb/mode1.png' },
									{ name: 'doudizhu', path: 'extension/如真似幻/images/modeb/mode2.png' },
									{ name: 'setting', path: 'extension/如真似幻/images/setting.json' },
									{ name: 'VCD', path: 'extension/如真似幻/audio/vcd.jpg' },
									/*	{ name: '勇士长歌', path: 'extension/如真似幻/audio/勇士长歌/bg.jpg' },
										{ name: '雷神之管', path: 'extension/如真似幻/audio/雷神之管/bg.jpg' },
										{ name: '米老鼠', path: 'extension/如真似幻/audio/米老鼠/bg.jpg' },
										{ name: '文明', path: 'extension/如真似幻/audio/文明/bg.jpg' },
										{ name: '三国杀', path: 'extension/如真似幻/audio/三国杀/bg.jpg' },
										{ name: '英雄澎湃', path: 'extension/如真似幻/audio/英雄澎湃/bg.jpg' },
										{ name: '英雄之证', path: 'extension/如真似幻/audio/英雄之证/bg.jpg' },*/
								];
								assetListz.forEach(asset => {
									zloader.add(asset.name, lib.assetURL + asset.path);
								});
								rzshmusicpack.forEach(item => {
									zloader.add(item, lib.assetURL + 'extension/如真似幻/audio/music/' + item + '/bg.jpg')
								})





								function setupz() {
									console.timeEnd('Z加载完毕')
									//左边花纹，飘带，圈，龙头，星星，段位文字，巅峰赛，赛季等								
									let jj_tittle = paiweicreate('jj_tittle');
									uiinit(jj_tittle);
									let publicui_title_bg = paiweicreate('publicui_title_bg');
									uiinit(publicui_title_bg);
									let s0 = paiweicreate('s0');
									paiweihometop.addChild(publicui_title_bg, jj_tittle, s0)
									uiinit(s0);
									let randomsaiji = Math.floor(Math.random() * 13);
									s0.texture = zloader.resources.paiweiui.textures['s' + randomsaiji]
									let ttrankbg1 = paiweicreate('ttrankbg1');
									uiinit(ttrankbg1)
									let ttrankbg3 = paiweicreate('ttrankbg3');
									uiinit(ttrankbg3)
									let ttrankbg2 = paiweicreate('ttrankbg2');
									uiinit(ttrankbg2);
									paiweihomeleft.addChild(ttrankbg1, ttrankbg3, ttrankbg2);
									//这是龙头
									let jjpond = lib.config.tianti_versus_two.xxingnum;
									if (lib.config.tianti_0星) jjpond++;
									let ttrank;
									if (jjpond < 7) {
										ttrank = paiweicreate('jj_grade_qingtong');
										uiinit(ttrank);
										paiweihomeleft.addChild(ttrank);
									} else if (jjpond < 19) {
										ttrank = paiweicreate('jj_grade_baiyin');
										uiinit(ttrank);
										paiweihomeleft.addChild(ttrank);
									} else if (jjpond < 44) {
										ttrank = paiweicreate('jj_grade_huangjin');
										uiinit(ttrank);
										paiweihomeleft.addChild(ttrank);
									} else if (jjpond < 69) {
										ttrank = paiweicreate('jj_grade_feicui');
										uiinit(ttrank);
										paiweihomeleft.addChild(ttrank);
									} else if (jjpond < 99) {
										ttrank = paiweicreate('jj_grade_dashi');
										uiinit(ttrank);
										paiweihomeleft.addChild(ttrank);
									}
									else if (jjpond >= 99)
									//传说
									{
										ttrank = paiweicreatey('ttrank');
										uiinit(ttrank);
										paiweihomeleft.addChild(ttrank);
									}
									//玩家段位
									let jjbond;
									jjbond = lib.config.tianti_versus_two.xxingnum;//星星数量
									let [rankduanname, rankduannum, rankduanlim] = getName_排位(jjbond);//段位名称，当前星星，星星上限
									if (lib.config.tianti_0星) [rankduanname, rankduannum, rankduanlim] = getName_排位(jjbond + 1)
									//	console.log(rankduannum)
									let jj_rankgrade = new PIXI.Text(rankduanname);
									jj_rankgrade.style.fontFamily = 'shousha';
									jj_rankgrade.style.fontSize = 48;
									jj_rankgrade.anchor.set(0.5);
									jj_rankgrade.position.set(0, 155 * pph);
									jj_rankgrade.style.fill = '#DAA520';
									ttrankbg2.addChild(jj_rankgrade);
									//士气
									let load_progressbar = new PIXI.NineSlicePlane(zloader.resources.paiweiui.textures['load_progressbar'], 25, 30, 25, 30);
									load_progressbar.width = 280 * ppw;
									load_progressbar.height = 35 * pph;
									load_progressbar.pivot.set(0.5);
									load_progressbar.position.set(-138 * ppw, 210 * pph);
									ttrankbg2.addChild(load_progressbar);
									//条条
									let jj_morale = paiweicreate('jj_morale');

									jj_morale.width = lib.config.tianti_versus_two.count / lib.config.tianti_versus_two.top * 260 * ppw;
									jj_morale.height = 23 * pph;
									jj_morale.position.set(10 * ppw, 6 * pph);
									load_progressbar.addChild(jj_morale);
									//士气文字
									let jj_morale_text = new PIXI.Text(lib.config.tianti_versus_two.count + '/' + lib.config.tianti_versus_two.top);
									jj_morale_text.style.fontFamily = 'shousha';
									jj_morale_text.style.fontSize = 24;
									jj_morale_text.anchor.set(0.5);
									jj_morale_text.position.set(0, 225 * pph);
									jj_morale_text.style.fill = '#C0C0C0';
									ttrankbg2.addChild(jj_morale_text);
									if (lib.config.tianti_versus_two.top != 40 && lib.config.tianti_versus_two.top != 550) {
										let jj_protect_mark = paiweicreate('jj_protect_mark');
										jj_protect_mark.position.set(75 * ppw, 0);
										load_progressbar.addChild(jj_protect_mark)
									}

									//星星
									if (!lib.config.tianti_0星) {
										if (rankduanlim == 2) {
											for (let i = 0; i < rankduanlim; i++) {
												let jj_star1 = paiweicreate('jj_star_off');
												uiinit(jj_star1);
												jj_star1.x += i * 60 * ppw;
												if (i < rankduannum) jj_star1.texture = zloader.resources.paiweiui.textures['jj_star_on'];
												paiweihomeleft.addChild(jj_star1)
											}
										}
										if (rankduanlim == 4) {
											for (let i = 0; i < rankduanlim; i++) {
												let jj_star1 = paiweicreate('jj_star_off');
												uiinit(jj_star1);
												jj_star1.x += i * 60 * ppw - 60 * ppw;
												if (i < rankduannum) jj_star1.texture = zloader.resources.paiweiui.textures['jj_star_on'];
												paiweihomeleft.addChild(jj_star1)
											}
										}
										if (rankduanlim == 5) {
											for (let i = 0; i < rankduanlim; i++) {
												let jj_star1 = paiweicreate('jj_star_off');
												uiinit(jj_star1);
												jj_star1.x += i * 60 * ppw - 90 * ppw;
												if (i < rankduannum) jj_star1.texture = zloader.resources.paiweiui.textures['jj_star_on'];
												paiweihomeleft.addChild(jj_star1)
											}
										}
										if (rankduanlim > 5) {//传说是星x数字
											let jj_star1 = paiweicreate('jj_star_on');
											uiinit(jj_star1);
											let xingxingxx = new PIXI.Text('x ' + rankduannum);
											xingxingxx.style.fontFamily = 'shousha';
											xingxingxx.style.fontSize = 48;
											xingxingxx.anchor.set(0.5);
											xingxingxx.position.set(70 * ppw, -5 * pph);
											xingxingxx.style.fill = '#DAA520';
											jj_star1.addChild(xingxingxx)
											paiweihomeleft.addChild(jj_star1)

										}
									} else if (lib.config.tianti_0星) {
										if (jjbond <= 1) {//青铜0星2上限
											for (let i = 0; i < 2; i++) {
												let jj_star1 = paiweicreate('jj_star_off');
												uiinit(jj_star1);
												jj_star1.x += i * 60 * ppw;
												paiweihomeleft.addChild(jj_star1)
											}
										} else if (jjbond <= 14) {//白银0星4上限
											for (let i = 0; i < 4; i++) {
												let jj_star1 = paiweicreate('jj_star_off');
												uiinit(jj_star1);
												jj_star1.x += i * 60 * ppw - 60 * ppw;
												paiweihomeleft.addChild(jj_star1)
											}

										} else if (jjbond < 98) {
											for (let i = 0; i < 5; i++) {//黄金翡翠大师5上限
												let jj_star1 = paiweicreate('jj_star_off');
												uiinit(jj_star1);
												jj_star1.x += i * 60 * ppw - 90 * ppw;
												paiweihomeleft.addChild(jj_star1)
											}

										} else if (jjbond >= 98) {//传说是数字0
											let jj_star1 = paiweicreate('jj_star_on');
											uiinit(jj_star1);
											let xingxingxx = new PIXI.Text('x 0');
											xingxingxx.style.fontFamily = 'shousha';
											xingxingxx.style.fontSize = 48;
											xingxingxx.anchor.set(0.5);
											xingxingxx.position.set(70 * ppw, -5 * pph);
											xingxingxx.style.fill = '#DAA520';
											jj_star1.addChild(xingxingxx)
											paiweihomeleft.addChild(jj_star1)
										}
									}

									//右边白框按钮，排位赛文字
									let tiantibg = paiweicreate('tiantibg');
									uiinit(tiantibg);
									let jj_dianfeng = paiweicreate('jj_dianfeng');
									uiinit(jj_dianfeng);
									let solobtn = paiweicreate('solobtn');
									uiinit(solobtn, true);
									let versustwobtn = paiweicreate('versustwobtn');
									uiinit(versustwobtn, true);
									let rzclosse = paiweicreate('back')
									rzclosse.name = 'rzclose';
									uiinit(rzclosse, true);
									rzclosse.scale.set(0.65);
									rzclosse.y = 35 * pph;
									paiweihomeright.addChild(tiantibg, jj_dianfeng, solobtn, versustwobtn);
									paiweihome.addChild(rzclosse);
									paiweihome.on('added', () => {
										gsap.fromTo(//右边弹簧
											paiweihomeright,
											{ y: -paiweihomeright.height - 100 },
											{ duration: 0.7, y: paiweihomeright.y, ease: "elastic.out(1, 0.3)" }
										);
										gsap.fromTo(ttrank.scale, { x: 0.1, y: 0.1 }, { x: ttrank.scale.x, y: ttrank.scale.y, duration: 1, ease: "power4.out", onComplete: function () { window.isOnhide = false } });//龙头缩放
										gsap.fromTo(//上面抽屉
											paiweihometop,
											{ y: -paiweihometop.height - 100 },
											{ duration: 0.5, y: 0, ease: "power4.out" });
									})
									//菜单背景
									let bigmenu = menucreate("bigmenu");
									uiinit(bigmenu);
									menuhomeunder.addChild(bigmenu)
									//按钮
									const menubtnarr = ['menuyi1', 'menuyi2', 'menuyi3', 'menuyi4', 'menuyi5', 'menuyi6', 'menuer1', 'menusan1', 'menusan2', 'menusan3', 'menusan4', 'menusi1', 'menusi2', 'menusi3', 'menusi4', 'menusi5', 'menusi6', 'menuwu1', 'menuwu2', 'menuwu3']
									for (let i = 0; i < menubtnarr.length; i++) {
										let name = menubtnarr[i];
										let menubtn = menucreate(name);
										uiinit(menubtn, true);
										menubtn.scale.set(0.75 * pps);
										//红点
										if (lib.config.red_point) {
											if (Math.random() < 0.1) {
												let sprite = setcreate('redPoint');
												sprite.x = menubtn.width / 1.2;
												sprite.y = -menubtn.height / 4;
												sprite.scale.set(0.8 * pps);
												menubtn.addChild(sprite);
											}
										}
										if (i < 6) {
											menubtn.x = (180 + i * 122) * ppw;
											menubtn.y = 110 * pph;
										} else if (i == 6) {
											menubtn.x = 180 * ppw;
											menubtn.y = 195 * pph;
										} else if (6 < i && i < 11) {
											menubtn.x = (180 + (i - 7) * 122) * ppw; menubtn.y = 280 * pph;
										} else if (11 <= i && i < 17) {
											menubtn.x = (180 + (i - 11) * 122) * ppw; menubtn.y = 365 * pph;
										} else if (17 <= i) {
											menubtn.x = (180 + (i - 17) * 122) * ppw; menubtn.y = 450 * pph;
										}
										menuhomeunder.addChild(menubtn)
									}
									let pubbtn_close = menucreate("pubbtn_close");
									uiinit(pubbtn_close, true);
									menuhomeunder.addChild(pubbtn_close);
									//设置方面
									//游戏：自动确认，无闪自动取消，拆顺手牌选择，不无懈自己，不对敌方出桃
									//背景音乐，
									//技能：自动发动：
									//游戏背景，随机背景按钮
									function setcreate(name) {
										const sprite = new PIXI.Sprite(zloader.resources.setting.textures[name]);
										sprite.name = name;
										return sprite;
									}
									function setcreatex(name) {
										const sprite = new PIXI.Sprite();
										sprite.interactive = true;
										//	sprite.on('pointerdown', onbuttonzd);
										sprite.on('pointerup', onbuttonzu);
										return sprite;
									}
									let set_dialog = setcreate('set_dialog')
									uiinit(set_dialog);
									set_dialog.interactive = true;
									set_dialog.scale.x = 2 * ppw;
									set_dialog.scale.y = 1.2 * pph;
									settingbg.addChild(set_dialog);
									// 获取纹理
									let settexture = zloader.resources.setting.textures['set_tab'];
									// 创建3个精灵
									let settings = ['setab1', 'setab2', 'setab3'];
									let settingsr = ['setright1', 'setright1', 'setright1']
									for (let i = 0; i < settings.length; i++) {
										let sprite = new PIXI.Sprite(settexture);
										sprite.name = settings[i];
										uiinit(sprite, true)
										sprite.anchor.set(0.5);
										sprite.scale.set(0.4, 0.65)
										// 设置每个精灵的坐标
										sprite.x = -175 * ppw;
										sprite.y = i * 50 * pph - 110 * pph;
										// 添加文字标签
										let label = new PIXI.Text('', { fontSize: 32, fill: '#C0C0C0', fontFamily: 'shousha' });
										label.anchor.set(0.5);
										label.text = i === 0 ? '音乐' : i === 1 ? '游戏' : '背景';
										label.y = -8 * pph;
										sprite.addChild(label);
										set_dialog.addChild(sprite);
									};
									//下面开始摸具体设置
									//settingright1的设置，与音乐有关
									//将settingright1与set_dialog重合，三个页面与dialog想同
									settingright1.width = set_dialog.width;
									settingright1.height = set_dialog.height;
									settingright2.width = set_dialog.width;
									settingright2.height = set_dialog.height;
									settingright3.width = set_dialog.width;
									settingright3.height = set_dialog.height;
									settingright1.on('added', () => {
										innerSprite.texture = zloader.resources[rzshbgm].texture;
									})
									//碟片总圆
									let circleContainer = new PIXI.Container();
									circleContainer.scale.x = 0.6 * pph / ppw;
									circleContainer.interactive = true;
									let isSliding = false;
									let nextIndex;
									circleContainer.on('pointerdown', (event) => {
										circleContainer.startX = event.data.global.x;
										isSliding = true;
									});
									circleContainer.on('pointermove', (event) => {
										if (!isSliding) return;
										const distance = event.data.global.x - circleContainer.startX;
										if (distance > 0) {
											nextIndex = rzshmusicpack.indexOf(rzshbgm) + 1;
											if (nextIndex >= rzshmusicpack.length) {
												nextIndex = 0;
											}
										} else if (distance < 0) {
											nextIndex = rzshmusicpack.indexOf(rzshbgm) - 1;
											if (nextIndex < 0) {
												nextIndex = rzshmusicpack.length - 1;
											}
										}
									});
									circleContainer.on('pointerup', (event) => {
										let distance = event.data.global.x - circleContainer.startX;
										if (distance == 0) return;
										isSliding = false;
										rzshbgm = rzshmusicpack[nextIndex];
										game.saveConfig('rzshbgm', rzshbgm);
										// 切换纹理和文字
										innerSprite.texture = zloader.resources[rzshbgm].texture;
										bgmname.text = rzshbgm;
										PIXI.sound.remove('outgame');
										PIXI.sound.add('outgame', { url: lib.assetURL + 'extension/如真似幻/audio/music/' + rzshbgm + '/outgame.mp3', loop: true })
										PIXI.sound.play('outgame');
									});
									let radius = 100 * pps;
									//外圆白底
									let outerMask = new PIXI.Graphics();
									outerMask.beginFill(0x000000);
									outerMask.drawCircle(0, 0, radius);
									outerMask.endFill();
									circleContainer.addChild(outerMask);
									//内圆黑底
									let innerMask = new PIXI.Graphics();
									innerMask.beginFill(0x000000);
									innerMask.drawCircle(0, 0, radius * 0.6); // 内圆半径为外圆半径的 0.6
									innerMask.endFill();
									circleContainer.addChild(innerMask);
									//内圆填充
									let innerTexture = zloader.resources[rzshbgm].texture;
									let innerSprite = new PIXI.Sprite(innerTexture);
									innerSprite.anchor.set(0.5);
									innerSprite.scale.set(0.2);
									gsap.to(innerSprite, { duration: 6, rotation: Math.PI * 2, repeat: -1, ease: "none" });
									//外圆填充
									let outerTexture = zloader.resources.VCD.texture;
									let outerSprite = new PIXI.Sprite(outerTexture);
									outerSprite.anchor.set(0.5);
									outerSprite.scale.set(0.35);
									gsap.to(outerSprite, { duration: 4, rotation: Math.PI * 2, repeat: -1, ease: "none" });
									circleContainer.addChild(outerSprite, innerSprite)
									innerSprite.mask = innerMask;
									outerSprite.mask = outerMask;
									settingright1.addChild(circleContainer);
									//音乐标题
									const bgmname = new PIXI.Text(rzshbgm);
									bgmname.style.fontFamily = 'shousha';
									bgmname.style.fontSize = 16;
									bgmname.style.fill = '#FFE4B5';
									bgmname.anchor.set(0.5);
									bgmname.y = -110 * pph;
									settingright1.addChild(bgmname);
									//至此，音乐部分完结	
									//游戏设置部分，下面都是大横条
									let auto_confirmbg = setcreate('set_mbg');//自动确认
									auto_confirmbg.scale.set(0.35, 0.75);
									let auto_confirmtext = new PIXI.Text('自动确认');
									auto_confirmtext.style.fontFamily = 'shousha';
									auto_confirmtext.style.fontSize = 28;
									auto_confirmtext.position.set(25 * ppw, 3 * pph);
									auto_confirmtext.style.fill = '#FFE4B5';
									let auto_confirmset = setcreatex('set_btnn_off');//选择框
									auto_confirmset.position.set(220 * ppw, 8 * pph);
									auto_confirmset.scale.set(0.8 * pps);
									auto_confirmset.name = 'auto_confirm';
									auto_confirmbg.addChild(auto_confirmtext, auto_confirmset);
									let skip_shanbg = setcreate('set_mbg');//无闪跳过
									skip_shanbg.x = 125 * ppw;
									skip_shanbg.scale.set(0.35 * ppw, 0.75 * pph);
									let skip_shantext = new PIXI.Text('无闪跳过');
									skip_shantext.style.fontFamily = 'shousha';
									skip_shantext.style.fontSize = 28;
									skip_shantext.position.set(25 * ppw, 3 * pph);
									skip_shantext.style.fill = '#FFE4B5';
									let skip_shanset = setcreatex('set_btnn_off');//选择框
									skip_shanset.position.set(220 * ppw, 8 * pph);
									skip_shanset.scale.set(0.8 * pps);
									skip_shanset.name = 'skip_shan';
									skip_shanbg.addChild(skip_shantext, skip_shanset);
									let unauto_choosebg = setcreate('set_mbg');//拆顺选择
									unauto_choosebg.y = 60 * pph;
									unauto_choosebg.scale.set(0.35 * ppw, 0.75 * pph);
									let unauto_choosetext = new PIXI.Text('拆顺选择');
									unauto_choosetext.style.fontFamily = 'shousha';
									unauto_choosetext.style.fontSize = 28;
									unauto_choosetext.position.set(25 * ppw, 3 * pph);
									unauto_choosetext.style.fill = '#FFE4B5';
									let unauto_chooseset = setcreatex('set_btnn_off');//选择框
									unauto_chooseset.position.set(220 * ppw, 8 * pph);
									unauto_chooseset.scale.set(0.8 * pps);
									unauto_chooseset.name = 'unauto_choose';
									unauto_choosebg.addChild(unauto_choosetext, unauto_chooseset);
									let tao_enemybg = setcreate('set_mbg');//桃救敌方
									tao_enemybg.x = 125 * ppw;
									tao_enemybg.y = 60 * pph;
									tao_enemybg.scale.set(0.35 * ppw, 0.75 * pph);
									let tao_enemytext = new PIXI.Text('对敌出桃');
									tao_enemytext.style.fontFamily = 'shousha';
									tao_enemytext.style.fontSize = 28;
									tao_enemytext.position.set(25 * ppw, 3 * pph);
									tao_enemytext.style.fill = '#FFE4B5';
									let tao_enemyset = setcreatex('set_btnn_off');//选择框
									tao_enemyset.position.set(220 * ppw, 8 * pph);
									tao_enemyset.scale.set(0.8 * pps);
									tao_enemyset.name = 'tao_enemy';
									tao_enemybg.addChild(tao_enemytext, tao_enemyset);
									let wuxie_selfbg = setcreate('set_mbg');//无懈自己							
									wuxie_selfbg.y = 120 * pph;
									wuxie_selfbg.scale.set(0.35 * ppw, 0.75 * pph);
									let wuxie_selftext = new PIXI.Text('不防自己');
									wuxie_selftext.style.fontFamily = 'shousha';
									wuxie_selftext.style.fontSize = 28;
									wuxie_selftext.position.set(25 * ppw, 3 * pph);
									wuxie_selftext.style.fill = '#FFE4B5';
									let wuxie_selfset = setcreatex('set_btnn_off');//选择框
									wuxie_selfset.position.set(220 * ppw, 8 * pph);
									wuxie_selfset.scale.set(0.8 * pps);
									wuxie_selfset.name = 'wuxie_self';
									wuxie_selfbg.addChild(wuxie_selftext, wuxie_selfset);
									let red_pointbg = setcreate('set_mbg');//红点入侵
									red_pointbg.y = 180 * pph;
									red_pointbg.scale.set(0.35 * ppw, 0.75 * pph);
									let red_pointtext = new PIXI.Text('红点入侵');
									red_pointtext.style.fontFamily = 'shousha';
									red_pointtext.style.fontSize = 28;
									red_pointtext.position.set(25 * ppw, 3 * pph);
									red_pointtext.style.fill = '#FFE4B5';
									let red_pointset = setcreatex('set_btnn_off');//选择框
									red_pointset.position.set(220 * ppw, 8 * pph);
									red_pointset.scale.set(0.8 * pps);
									red_pointset.name = 'red_point';
									red_pointbg.addChild(red_pointtext, red_pointset);
									let scollannouncementbg = setcreate('set_mbg');//滚屏公告
									scollannouncementbg.x = 125 * ppw;
									scollannouncementbg.y = 120 * pph;
									scollannouncementbg.scale.set(0.35 * ppw, 0.75 * pph);
									let scollannouncementtext = new PIXI.Text('滚屏公告');
									scollannouncementtext.style.fontFamily = 'shousha';
									scollannouncementtext.style.fontSize = 28;
									scollannouncementtext.position.set(25 * ppw, 3 * pph);
									scollannouncementtext.style.fill = '#FFE4B5';
									let scollannouncementset = setcreatex('set_btnn_off');//选择框
									scollannouncementset.position.set(220 * ppw, 8 * pph);
									scollannouncementset.scale.set(0.8 * pps);
									scollannouncementset.name = 'scollannouncement';
									scollannouncementbg.addChild(scollannouncementtext, scollannouncementset);
									settingright2.x = -120 * ppw;
									settingright2.y = -120 * pph;
									settingright2.addChild(auto_confirmbg, skip_shanbg, unauto_choosebg, tao_enemybg, wuxie_selfbg, red_pointbg, scollannouncementbg);
									function onbuttonzu(event) {
										if (lib.config[event.target.name] == true) game.saveConfig(event.target.name, false)
										else game.saveConfig(event.target.name, true);
										if (lib.config[event.target.name]) event.target.texture = zloader.resources.setting.textures['set_btnn_on']
										else event.target.texture = zloader.resources.setting.textures['set_btnn_off']
									}
									settingright2.on('added', () => {
										auto_confirmset.texture = lib.config.auto_confirm ? zloader.resources.setting.textures['set_btnn_on'] : zloader.resources.setting.textures['set_btnn_off'];
										skip_shanset.texture = lib.config.skip_shan ? zloader.resources.setting.textures['set_btnn_on'] : zloader.resources.setting.textures['set_btnn_off'];
										unauto_chooseset.texture = lib.config.unauto_choose ? zloader.resources.setting.textures['set_btnn_on'] : zloader.resources.setting.textures['set_btnn_off'];
										tao_enemyset.texture = lib.config.tao_enemy ? zloader.resources.setting.textures['set_btnn_on'] : zloader.resources.setting.textures['set_btnn_off'];
										wuxie_selfset.texture = lib.config.wuxie_self ? zloader.resources.setting.textures['set_btnn_on'] : zloader.resources.setting.textures['set_btnn_off'];
										red_pointset.texture = lib.config.red_point ? zloader.resources.setting.textures['set_btnn_on'] : zloader.resources.setting.textures['set_btnn_off'];
										scollannouncementset.texture = lib.config.scollannouncement ? zloader.resources.setting.textures['set_btnn_on'] : zloader.resources.setting.textures['set_btnn_off'];
									})
									gloader.load(setupg)
								}
								//g加载器，加载武将界面
								let gloader = new PIXI.Loader();
								//加载需要的武将界面纹理图。
								gloader.add('wujiang', lib.assetURL + 'extension/如真似幻/images/wujiang.json');
								gloader.add('label', lib.assetURL + 'extension/如真似幻/images/label.json');
								//武将界面必须使用内存控制。在修改选将之前 否则内存会爆炸。
								//创建一个容器池。
								//所有的武将必须加入武将池。
								function wujiangcreate(name) {
									let sprite = new PIXI.Sprite(gloader.resources.wujiang.textures[name]);
									sprite.name = name;
									return sprite;
								}
								let wujiangpool = [];
								//武将界面大容器，放置所有小容器和精灵
								let wujianghome = new PIXI.Container();
								wujianghome.width = pixiapp.screen.width;
								wujianghome.height = pixiapp.screen.height;
								//上部容器，放头和左边大框以及选择按钮
								let wujianghometop = new PIXI.Container();
								wujianghometop.width = pixiapp.screen.width;
								wujianghometop.height = pixiapp.screen.height;
								//左边容器，两个固定按钮容器和几个滑动按钮容器
								let wujianghomeleft = new PIXI.Container();
								wujianghomeleft.width = pixiapp.screen.width;
								wujianghomeleft.height = pixiapp.screen.height;
								//中间容器，放武将图
								let wujianghomecenter = new PIXI.Container();
								wujianghomecenter.width = pixiapp.screen.width;
								wujianghomecenter.height = pixiapp.screen.height;
								let wujianghomeright = new PIXI.Container();
								wujianghomeright.width = pixiapp.screen.width;
								wujianghomeright.height = pixiapp.screen.height;
								wujianghome.addChild(wujianghometop, wujianghomeleft, wujianghomecenter, wujianghomeright)
								//热门和全部，这是不可滑动的
								let wujianghomeleft1 = new PIXI.Container();
								wujianghomeleft1.width = pixiapp.screen.width;
								wujianghomeleft1.height = pixiapp.screen.height;
								//	wujianghome.addChild(wujianghomeleft1);
								//按钮的滑动区域wujianghomeleft2，首先需要一个容器放所有按钮
								let wujianghomeleft2 = new PIXI.Container();
								wujianghomeleft2.width = pixiapp.screen.width / 3;
								wujianghomeleft2.height = pixiapp.screen.height;
								//按钮滑动视口
								let wujiangscrollleft = new PIXI.Scrollbox({
									boxWidth: 160 * ppw,
									boxHeight: 263 * pph,
									passiveWheel: false,
									scrollbarBackgroundAlpha: 0,
									scrollbarSize: 0,
									stopPropagation: true,
									divWheel: pixiapp.view,
									interaction: pixiapp.renderer.plugins.interaction,
								})
								wujiangscrollleft.position.set(45 * ppw, 255 * pph);
								wujiangscrollleft.content.addChild(wujianghomeleft2);
								wujianghomeleft.addChild(wujiangscrollleft, wujianghomeleft1);
								let rzshtranslate = {};
								let rzshcharacters = [];
								for (let l in lib.translate) {
									rzshtranslate[l] = lib.translate[l]
								}
								for (let i in lib.imported.character) {//获取所有武将包//并加载所有武将图片//加入集合中防止出现重复武将
									if (lib.config.hidepack && Array.isArray(lib.config.hidepack) && lib.config.hidepack.includes(i)) continue;
									for (let j in lib.imported.character[i].character) {
										if (rzshcharacters.includes(j)) continue;
										rzshcharacters.push(j);
										let resources;
										if (lib.config.qhly_skinset.skin[j]) resources = gloader.add(j, lib.assetURL + lib.config.qhly_originSkinPath + j + '/' + lib.config.qhly_skinset.skin[j]);
										else resources = gloader.add(j, lib.assetURL + 'image/character/' + j + '.jpg');
										resources.loadType = PIXI.LoaderResource.LOAD_TYPE.XHR;

									}
									//获取翻译
									for (let k in lib.imported.character[i].translate) {
										rzshtranslate[k] = lib.imported.character[i].translate[k]
									}
								}
								//武将滑动视口//完美大小位置						
								let wujiangscrollright = new PIXI.Scrollbox({
									boxWidth: 680 * ppw,
									boxHeight: 430 * pph,
									passiveWheel: false,
									scrollbarBackgroundAlpha: 0,
									scrollbarSize: 0,
									stopPropagation: true,
									divWheel: pixiapp.view,
									interaction: pixiapp.renderer.plugins.interaction,
								})
								wujiangscrollright.position.set(245 * ppw, 67 * pph);
								wujianghomecenter.addChild(wujiangscrollright)
								//中间界面容器类	
								let bbox = wujiangscrollright.content.addChild(new PIXI.Container());
								//放势力按钮的的地方
								let wujiangscrollgroup = new PIXI.Scrollbox({
									boxWidth: 170 * ppw,
									boxHeight: 300 * pph,
									passiveWheel: false,
									scrollbarBackgroundAlpha: 0,
									scrollbarSize: 0,
									stopPropagation: true,
									divWheel: pixiapp.view,
									interaction: pixiapp.renderer.plugins.interaction,
								})
								wujiangscrollgroup.position.set(895 * ppw, 110 * pph);
								wujianghomeright.addChild(wujiangscrollgroup)
								//中间界面容器类	
								let btnbox = wujiangscrollgroup.content.addChild(new PIXI.Container());
								//	btnbox.beginFill(0xff0000, 0.25).drawRect(0, 0, 150, 300).endFill();
								if (!lib.config.sprite_avatar) game.saveConfig('sprite_avatar', {
									x: 31,
									y: -23,
									w: 135,
									h: 250,
								})
								//console.log(lib.translate)
								function setupg() {
									console.timeEnd('g加载完毕');
									//头部
									//顶上信息栏
									let warr_info_bg = wujiangcreate('warr_info_bg');
									uiinit(warr_info_bg);
									//左边大长框
									let wujiangchangkuang = wujiangcreate('wujiangchangkuang');
									uiinit(wujiangchangkuang);
									//将魂
									let jianghun = wujiangcreate('jianghun');
									uiinit(jianghun);
									//流苏
									let warr_info_dec = wujiangcreate('warr_info_dec');
									uiinit(warr_info_dec);
									//将力条
									let jl_bar_fg = wujiangcreate('jl_bar_fg');
									uiinit(jl_bar_fg);
									//将力条旁边按钮
									let warr_arr_official = wujiangcreate('warr_arr_official');
									uiinit(warr_arr_official);
									//大元帅图标
									let officalui_icon_10 = wujiangcreate('officalui_icon_10');
									uiinit(officalui_icon_10);
									//大元帅文字图
									let offical_dayuanshuai = wujiangcreate('offical_dayuanshuai');
									uiinit(offical_dayuanshuai);
									//将力值
									let jltext = new PIXI.Text("将力：98900/98900");
									jltext.style.fontFamily = 'shousha';
									jltext.style.fontSize = 24;
									jltext.position.set(0, 0);
									jltext.anchor.set(0.5);
									jltext.style.fill = '#C0C0C0';
									jl_bar_fg.addChild(jltext);
									//将魂值
									let jianghuntext = new PIXI.Text("100000");
									jianghuntext.style.fontFamily = 'shousha';
									jianghuntext.style.fontSize = 24;
									jianghuntext.position.set(0, 47 * pph);
									jianghuntext.anchor.set(0.5);
									jianghuntext.style.fill = '#C0C0C0';
									jianghun.addChild(jianghuntext);
									warr_info_bg.addChild(wujiangchangkuang, jianghun, warr_info_dec, jl_bar_fg, warr_arr_official, officalui_icon_10, offical_dayuanshuai);
									//接下来是全部武将，搜索和返回按钮
									let quanbuxianshi = wujiangcreate('biaojibeijing');
									uiinit(quanbuxianshi);
									quanbuxianshi.scale.set(0.885 * ppw, 0.6 * pph);
									let quanbuxianshitext = new PIXI.Text(`全部武将`, { fontFamily: 'shousha', fontSize: 22, fill: '#FFE4B5' })
									quanbuxianshitext.anchor.set(0.5);
									let union_arrow = wujiangcreate('union_arrow');
									union_arrow.anchor.set(0.5)
									union_arrow.x = quanbuxianshi.width * 0.37 * ppw;
									quanbuxianshi.addChild(quanbuxianshitext, union_arrow);
									let search_btn = wujiangcreate('search_btn');
									uiinit(search_btn);
									let wujiangback = new PIXI.Sprite(zloader.resources.paiweiui.textures['back'])
									wujiangback.name = 'wujiangback';
									uiinit(wujiangback, true);
									wujianghometop.addChild(warr_info_bg, quanbuxianshi, search_btn, wujiangback);
									//全部按钮和收藏按钮		
									let btn_lvl1_1a = wujiangcreate('btn_lvl1_1');
									btn_lvl1_1a.name = 'btn_lvl1_1a';
									uiinit(btn_lvl1_1a);
									btn_lvl1_1a.interactive = true;
									btn_lvl1_1a.on('pointerup', wujiangup);
									btn_lvl1_1a.on('pointerdown', wujiangdown);
									btn_lvl1_1a.sec = 'favourite';
									btn_lvl1_1a.position.set(127 * ppw, 160 * pph)
									btn_lvl1_1a.scale.set(0.65 * pps);
									btn_lvl1_1a.anchor.set(0.5);
									let tag_hot = wujiangcreate('tag_hot');
									tag_hot.position.set(-100 * ppw, -50 * pph)
									uiinit(tag_hot);
									let btn_lvl1_1atext = new PIXI.Text(`热门`, { fontFamily: 'shousha', fontSize: 36, fill: '#FFE4B5' })
									btn_lvl1_1atext.anchor.set(0.5)
									btn_lvl1_1a.addChild(tag_hot, btn_lvl1_1atext)
									let btn_lvl1_1b = wujiangcreate('btn_lvl1_1');
									btn_lvl1_1b.name = 'btn_lvl1_1b';
									uiinit(btn_lvl1_1b);
									btn_lvl1_1b.interactive = true;
									btn_lvl1_1b.on('pointerup', wujiangup);
									btn_lvl1_1b.on('pointerdown', wujiangdown);
									btn_lvl1_1b.sec = 'all';
									btn_lvl1_1b.position.set(127 * ppw, 230 * pph);
									btn_lvl1_1b.scale.set(0.65 * pps);
									btn_lvl1_1b.anchor.set(0.5);
									let btn_lvl1_1btext = new PIXI.Text(`全部`, { fontFamily: 'shousha', fontSize: 36, fill: '#FFE4B5' })
									btn_lvl1_1btext.anchor.set(0.5);
									btn_lvl1_1btext.y = -15 * pph;
									let btn_lvl1_1btext2 = new PIXI.Text(``, { fontFamily: 'shousha', fontSize: 18, fill: '#FFE4B5' })
									btn_lvl1_1btext2.anchor.set(0.5);
									btn_lvl1_1btext2.y = 30 * pph;
									btn_lvl1_1btext.addChild(btn_lvl1_1btext2)
									btn_lvl1_1b.addChild(btn_lvl1_1btext)
									wujianghomeleft1.addChild(btn_lvl1_1a, btn_lvl1_1b);
									//武将包有关的		
									let isspriteMove=false;
									let shcounter = 0;
									//定位辅助计数			
									//    characterclose.brightness(0.5); 

									for (let i in lib.imported.character) {
										if (lib.config.hidepack && Array.isArray(lib.config.hidepack) && lib.config.hidepack.includes(i)) continue;
										//左边按钮
										let spritebtn = new PIXI.Sprite(gloader.resources.wujiang.textures['btn_lvl2_1'])
										spritebtn.y = pph * shcounter * spritebtn.height / 2;
										spritebtn.name = i;
										spritebtn.interactive = true;
										spritebtn.on('pointerup', wujiangup);
										spritebtn.on('pointerdown', wujiangdown);
										spritebtn.on('pointermove', () => {
											clearTimeout(pressTimer);
										});
										//变暗
										if (lib.config.characters && !lib.config.characters.includes(i)) spritebtn.filters = [characterclose];
										//武将包名字
										let text = new PIXI.Text(rzshtranslate[i + '_character_config']);
										text.style.fontFamily = 'shousha';
										text.style.fontSize = 28;
										text.position.set(120 * ppw, 50 * pph);
										text.anchor.set(0.5);
										text.style.fill = '#FFE4B5';
										spritebtn.scale.set(0.67 * ppw, 0.7 * pph);
										shcounter++;
										spritebtn.addChild(text);
										wujianghomeleft2.addChild(spritebtn);
										//接下来是重中之重
										for (let j in lib.imported.character[i].character) {
											//排除unseen
											if (Array.isArray(lib.imported.character[i].character[j][4]) && lib.imported.character[i].character[j][4].contains('unseen')) continue;
											//武将图
											let spritea = new PIXI.Sprite();
											try {
												spritea.texture = gloader.resources[j].texture;
											}
											catch (err) {
												console.log(j)
											}

											spritea.width = lib.config.sprite_avatar.w;
											spritea.height = lib.config.sprite_avatar.h;
											spritea.x = lib.config.sprite_avatar.x;
											spritea.y = lib.config.sprite_avatar.y;
											spritea.name = 'avatar';
											//边框
											let sprite = new PIXI.Sprite();
											//给精灵一个名字，应该给框才对
											sprite.name = j;
											//名字翻译，为搜索考虑
											sprite.name2 = rzshtranslate[j];
											//所属武将包
											sprite.pack = i;
											//势力	   
											sprite.secgroup = lib.imported.character[i].character[j][1];
											//如果存在双势力
											if (lib.imported.character[i].character[j][4] && lib.imported.character[i].character[j][4].toString().indexOf('double') != -1) sprite.secgroup = lib.imported.character[i].character[j][4].toString().split(':').slice(1);
											if (lib.config.favouriteCharacter.contains(j)) sprite.fav = true;
											try {
												if (!Array.isArray(sprite.secgroup)) sprite.texture = gloader.resources.wujiang.textures['name_' + sprite.secgroup] ? gloader.resources.wujiang.textures['name_' + sprite.secgroup] : gloader.resources.wujiang.textures['name_unknown'];

												else sprite.texture = gloader.resources.wujiang.textures['name_' + sprite.secgroup[0] + '_' + sprite.secgroup[1]] ? gloader.resources.wujiang.textures['name_' + sprite.secgroup[0] + '_' + sprite.secgroup[1]] : gloader.resources.wujiang.textures['name_unknown'];
											}
											catch (err) {
												sprite.texture = gloader.resources.wujiang.textures['name_known'];
											}
											sprite.interactive = true;
											sprite.on('pointerup', (event) => {
	let distance = event.data.global.x - sprite.startX;
	if(distance!=0)return;
												if (lib.config.extension_千幻聆音_enable && lib.config.rzshxqhly) {
													ui.window = ui.create.div('#window', document.body);
													ui.arena = ui.create.div('#arena.nome', ui.window);
													game.qhly_open_new(sprite.name, 'skill')
												}
											})
											sprite.on('pointerdown', (event) => {
											sprite.startX = event.data.global.x;
											})
										/*	sprite.on('pointermove', () => {
											isspriteMove=true;
											})*/
											sprite.addChild(spritea);
											//名字
											let spriteb = new PIXI.Text(sprite.name2, { fontFamily: 'shousha', fontSize: 24, fill: '#FFE4B5', wordWrap: true, wordWrapWidth: 24, align: 'center', breakWords: true, lineHeight: 20 });
											spriteb.anchor.set(0.5, 0)
											spriteb.position.set(17.5 * ppw, 23 * pph);
											if (Array.isArray(sprite.secgroup)) spriteb.y = 58 * pph;
											sprite.addChild(spriteb);
											let starttexture = gloader.resources.wujiang.textures['dj_star_light'];
											starttexture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
											//星星
											let spritec = new PIXI.TilingSprite(starttexture, starttexture.width * 0.75 * pps, starttexture.height * 3.75 * pps);
											spritec.tileScale.set(0.75 * pps);
											spritec.position.set(7 * pps, 120 * pps);
											sprite.addChild(spritec);
											let sprited;
											//稀有度
											if (window.noname_character_rank.rarity.legend.contains(j)) {
												sprited = new PIXI.AnimatedSprite.fromFrames(gloader.resources.label.data.animations['chuanshuo']);
												sprited.animationSpeed = 0.15;
												sprited.play();
											}
											else if (window.noname_character_rank.rarity.epic.contains(j)) {
												sprited = new PIXI.AnimatedSprite.fromFrames(gloader.resources.label.data.animations['shishibiaoqian']);
												sprited.animationSpeed = 0.2;
												sprited.play();
											}
											else if (window.noname_character_rank.rarity.rare.contains(j)) sprited = new PIXI.Sprite(gloader.resources.label.textures['skinGrade4']);
											else if (window.noname_character_rank.rarity.junk.contains(j)) sprited = new PIXI.Sprite(gloader.resources.label.textures['skinGrade2']);
											else sprited = new PIXI.Sprite(gloader.resources.label.textures['skinGrade3']);
											sprited.scale.set(0.65 * pps)
											sprited.x = 110 * ppw;
											sprite.addChild(sprited)

											sprite.scale.set(0.7 * ppw, 0.7 * pph);
											wujiangpool.push(sprite);
										}
									}
									btn_lvl1_1btext2.text = wujiangpool.length + '/' + wujiangpool.length;
									//右下角按钮
									let wujiangmenubtn = new PIXI.Sprite(yloader.resources.spritesui.textures['menu1']);
									wujiangmenubtn.scale.set(0.7 * ppw, 0.7 * pph);
									wujiangmenubtn.x = pixiapp.screen.width - 0.95 * wujiangmenubtn.width;
									wujiangmenubtn.y = pixiapp.screen.height - wujiangmenubtn.height;
									wujianghome.addChild(wujiangmenubtn);
									wujiangmenubtn.interactive = true;
									wujiangmenubtn.on('pointerup', () => {
										wujianghome.addChild(wujiangmenu1)
									})
									wujiangmenubtn.on('pointerdown', () => {
										PIXI.sound.play('PopUp')
									})
									//需要做一个蒙版，用来解决触屏按钮问题			
									let wujiangmenu1 = new PIXI.Container();
									let wujiangmenu_hitArea = new PIXI.Graphics();
									wujiangmenu_hitArea.beginFill(0x000000);
									wujiangmenu_hitArea.drawRect(0, 0, pixiapp.renderer.screen.width, pixiapp.renderer.screen.height);
									wujiangmenu_hitArea.endFill();
									wujiangmenu_hitArea.interactive = true;
									wujiangmenu_hitArea.alpha = 0;
									wujiangmenu_hitArea.on('pointerup', () => {
										if (isinputs != true) wujianghome.removeChild(wujiangmenu1)
									})
									//点击按钮后出现的东西
									let menutexture = new PIXI.Texture(zloader.resources.menubtn.textures['bigmenu'], new PIXI.Rectangle(0, 0, 120, 20));
									let wujiangmenubg = new PIXI.Sprite(menutexture);
									wujiangmenubg.interactive = true;
									wujiangmenubg.scale.set(3 * ppw, 3 * pph)
									wujiangmenubg.position.set(pixiapp.screen.width - wujiangmenubg.width, pixiapp.screen.height - wujiangmenubg.height);
									//需要往边框里放东西menusi5，under5，under5
									//设置
									let wujiangmenuset = new PIXI.Sprite(zloader.resources.menubtn.textures['menusi5']);
									wujiangmenuset.interactive = true;
									let pressTimer = null;
									let isinputs = false;
									wujiangmenuset.on('pointerup', () => {
										clearTimeout(pressTimer);
										if (isinputs != true) {
											inputs.forEach((input) => document.body.appendChild(input));
											isinputs = true;
										}
										else {
											isinputs = false;
											game.saveConfig('sprite_avatar', {
												x: inputs[0].value,
												y: inputs[1].value,
												w: inputs[2].value,
												h: inputs[3].value,
											})
											inputs.forEach((input) => input.remove())
										}
									})
									//长按重置
									wujiangmenuset.on('pointerdown', () => {
										if (isinputs == false) return;
										pressTimer = setTimeout(() => {
											if (confirm("是否重置武将图片位置？")) {
												inputs[0].value = 31;
												inputs[1].value = -23;
												inputs[2].value = 135;
												inputs[3].value = 250;
												wujiangpool.forEach((sprite) => {
													let avatar = sprite.getChildByName('avatar')
													if (avatar) {
														avatar.x = 31;
														avatar.y = -23;
														avatar.width = 135;
														avatar.height = 250;
													}
												});
												game.saveConfig('sprite_avatar', {
													x: 31,
													y: -23,
													w: 135,
													h: 250,
												})
											}
										}, 1000);
									});
									wujiangmenuset.on('pointermove', () => {
										clearTimeout(pressTimer);
									});
									wujiangmenuset.scale.set(0.25 * pps);
									let wujiangmenupifu = new PIXI.Sprite(yloader.resources.spritesui.textures['under5']);
									wujiangmenupifu.scale.set(0.25 * pps);
									wujiangmenupifu.x = 35 * ppw;
									wujiangmenupifu.interactive = true;
									wujiangmenupifu.on('pointerup', () => {
										if (!lib.config.extension_千幻聆音_enable) return;
										if (!lib.config.rzshxqhly) {
											if (confirm("是否开启千幻适配大界面？")) {
												game.saveConfig('rzshxqhly', true)
											}
										} else if (lib.config.rzshxqhly) {
											if (confirm("是否关闭千幻适配大页面？")) {
												game.saveConfig('rzshxqhly', false)
											}
										}
									});
									let wujiangmenuban = new PIXI.Sprite(yloader.resources.spritesui.textures['under6']);
									wujiangmenuban.x = 70 * ppw;
									wujiangmenuban.scale.set(0.25 * pps);
									wujiangmenuban.interactive = true;
									wujiangmenuban.on('pointerup', () => {//隐藏不想显示的武将包                                        
										clearTimeout(pressTimer);
										if (isinputs == true) return;
										if (currentwujiang == 'btn_lvl1_1a' || currentwujiang == 'btn_lvl1_1b') return;
										if (!lib.config.hidepack) lib.config.hidepack = [];
										if (!lib.config.hidepack.includes(filteredSprites[0].pack))
											if (confirm("是否在该页面隐藏该武将包？")) {
												game.saveConfig('hidepack', lib.config.hidepack.add(filteredSprites[0].pack))
											}
									});
									wujiangmenuban.on('pointerdown', () => {//隐藏不想显示的武将包
										if (isinputs == true) return;
										pressTimer = setTimeout(() => {
											if (confirm("是否重置该页面隐藏的武将包？重启生效")) {
												game.saveConfig('hidepack');
											}
										}, 1000)
									});
									wujiangmenuban.on('pointermove', () => {//隐藏不想显示的武将包
										clearTimeout(pressTimer);
									});
									// 创建4个输入框
									const inputsData = [
										{ type: 'text', placeholder: '精灵x', position: { left: '10%', top: '5%' }, propertyName: 'x' },
										{ type: 'text', placeholder: '精灵y', position: { left: '25%', top: '5%' }, propertyName: 'y' },
										{ type: 'text', placeholder: '精灵w', position: { right: '25%', top: '5%' }, propertyName: 'width' },
										{ type: 'text', placeholder: '精灵h', position: { right: '10%', top: '5%' }, propertyName: 'height' },
									];
									const createInput = (inputData, onInputChange) => {
										const input = document.createElement('input');
										input.setAttribute('type', inputData.type);
										input.setAttribute('placeholder', inputData.placeholder);
										input.style.position = 'fixed';
										input.style.width = '10%';
										input.style.height = '10%';
										input.style.zIndex = '100';
										input.value = wujiangpool[0].getChildByName('avatar')[inputData.propertyName]
										Object.assign(input.style, inputData.position);
										input.addEventListener('input', (event) => {
											onInputChange(inputData.propertyName, event.target.value);
										});
										return input;
									};
									const updateSpriteProperties = (propertyName, value) => {
										wujiangpool.forEach((sprite) => {
											const avatar = sprite.getChildByName('avatar')
											if (avatar) {
												avatar[propertyName] = value;
											}
										});
									};
									const inputs = inputsData.map((inputData) => {
										return createInput(inputData, updateSpriteProperties);
									});
									wujiangmenubg.addChild(wujiangmenuset, wujiangmenupifu, wujiangmenuban)
									wujiangmenu1.addChild(wujiangmenu_hitArea, wujiangmenubg);
									let currentwujiang = null;
									//按钮集合
									let secgroups = new Map();
									//筛选武将集合
									let filteredSprites = [];//当前选中的武将包
									let currentgroup = null;
									wujianghome.on('added', () => {
										uibg.texture = xloader.resources.wujiangBG.texture;
										wujiangdonghua();
										if (currentwujiang == 'btn_lvl1_1a') return;
										if (currentwujiang == null) currentwujiang = 'btn_lvl1_1a';
										if (currentwujiang != 'btn_lvl1_1a' && currentwujiang != 'btn_lvl1_1b') wujianghomeleft2.getChildByName(currentwujiang).texture = gloader.resources.wujiang.textures['btn_lvl2_1'];
										else wujianghomeleft1.getChildByName(currentwujiang).texture = gloader.resources.wujiang.textures['btn_lvl1_1'];
										currentwujiang = 'btn_lvl1_1a';
										btn_lvl1_1a.texture = gloader.resources.wujiang.textures['btn_lvl1_2'];
										bbox.removeChildren();
										filteredSprites = wujiangpool.filter((sprite) => sprite.fav === true);
										let filteredSpritesq = filteredSprites.slice();
										if (renderProcess != null) cancelAnimationFrame(renderProcess);
										addSprites(filteredSpritesq, bbox);
										secgroups.clear();
										for (const item of filteredSprites) {
											let secgroup = item.secgroup;
											if (Array.isArray(secgroup)) {
												for (const subsecgroup of secgroup) {
													// 如果 secgroups 中已经包含该子集合，则将当前元素加入该子集合中
													if (secgroups.has(subsecgroup)) {
														secgroups.get(subsecgroup).push(item);
													}
													// 如果 secgroups 中不包含该子集合，则将其加入 secgroups，并将当前元素作为该子集合的初始元素
													else {
														secgroups.set(subsecgroup, [item]);
													}
												}
											} else {
												if (secgroups.has(secgroup)) {
													secgroups.get(secgroup).push(item);
												} else {
													secgroups.set(secgroup, [item]);
												}
											}
										}
										let lgd = 0;
										if (btnbox.children.length > 0) {
											while (btnbox.children[0]) {
												let sprite = btnbox.removeChild(btnbox.children[0]);
												sprite.destroy();
											}
										}
										secgroups.forEach((items, secgroup) => {
											//console.log(`${secgroup}: ${items.length}`);
											//势力按钮的框
											let sprite = new PIXI.Sprite(gloader.resources.wujiang.textures['clt_lvl3_btn_off']);
											sprite.scale.set(0.7 * pps);
											sprite.anchor.set(0.5)
											sprite.position.set(100 * ppw, 41 * pph)
											sprite.y += lgd * 70;
											sprite.name = secgroup;
											lgd++;
											//文字
											let text = new PIXI.Text(rzshtranslate[secgroup], { fontFamily: 'shousha', fontSize: 28, fill: '#FFE4B5' });
											text.anchor.set(0.5);
											text.y = -12 * pph;
											//数量
											let text2 = new PIXI.Text(items.length + '/' + items.length, { fontFamily: 'shousha', fontSize: 18, fill: '#FFE4B5' });
											text2.anchor.set(0.5);
											text2.y = 16 * pph;
											sprite.addChild(text, text2);
											sprite.interactive = true;
											sprite.on('pointerup', groupup)
											sprite.on('pointerdown', groupdown)
											btnbox.addChild(sprite);

										});
									})
									wujianghome.on('removed', () => {
										uibg.texture = xloader.resources.uiBG.texture;
									})
									function wujiangup(event) {
										clearTimeout(pressTimer);
										if (event.target.name == currentwujiang) return;
										if (currentwujiang == null) currentwujiang = event.target.name;
										gsap.fromTo(//右边抽屉
											wujianghomeright,
											{ x: wujianghomeright.width },
											{ duration: 0.5, x: 0, ease: "power4.out" });
										if (window.currentSprite != event.target) return;
										if (event.target.name != 'btn_lvl1_1a' && event.target.name != 'btn_lvl1_1b') {
											if (currentwujiang != 'btn_lvl1_1a' && currentwujiang != 'btn_lvl1_1b') wujianghomeleft2.getChildByName(currentwujiang).texture = gloader.resources.wujiang.textures['btn_lvl2_1'];
											else wujianghomeleft1.getChildByName(currentwujiang).texture = gloader.resources.wujiang.textures['btn_lvl1_1'];
											event.target.texture = gloader.resources.wujiang.textures['btn_lvl2_2']
										}
										else {
											if (currentwujiang != 'btn_lvl1_1a' && currentwujiang != 'btn_lvl1_1b') wujianghomeleft2.getChildByName(currentwujiang).texture = gloader.resources.wujiang.textures['btn_lvl2_1'];
											else wujianghomeleft1.getChildByName(currentwujiang).texture = gloader.resources.wujiang.textures['btn_lvl1_1'];
											event.target.texture = gloader.resources.wujiang.textures['btn_lvl1_2'];
										}
										bbox.removeChildren();
										if (event.target.sec === 'all') {
											filteredSprites = wujiangpool;
										} else if (event.target.sec === 'favourite') {
											filteredSprites = wujiangpool.filter((sprite) => sprite.fav === true);
										} else {
											filteredSprites = wujiangpool.filter((sprite) => sprite.pack === event.target.name);
										}
										let filteredSpritess = filteredSprites.slice();
										// 遍历数组，对每个 secgroup 进行计数
										secgroups.clear();
										for (const item of filteredSprites) {
											let secgroup = item.secgroup;
											if (Array.isArray(secgroup)) {
												for (const subsecgroup of secgroup) {
													if (secgroups.has(subsecgroup)) {
														secgroups.get(subsecgroup).push(item);
													}
													else {
														secgroups.set(subsecgroup, [item]);
													}
												}
											} else {
												if (secgroups.has(secgroup)) {
													secgroups.get(secgroup).push(item);
												} else {
													secgroups.set(secgroup, [item]);
												}
											}
										}
										let lgd = 0;
										if (btnbox.children.length > 0) {
											while (btnbox.children[0]) {
												let sprite = btnbox.removeChild(btnbox.children[0]);
												sprite.destroy();
											}
										}
										secgroups.forEach((items, secgroup) => {
											//势力按钮的框
											let sprite = new PIXI.Sprite(gloader.resources.wujiang.textures['clt_lvl3_btn_off']);
											sprite.scale.set(0.7 * pps);
											sprite.anchor.set(0.5)
											sprite.position.set(100 * ppw, 41 * pph)
											sprite.y += lgd * 70 * pph;
											sprite.name = secgroup;
											lgd++;
											//文字
											let text = new PIXI.Text(rzshtranslate[secgroup], { fontFamily: 'shousha', fontSize: 28, fill: '#FFE4B5' });
											text.anchor.set(0.5);
											text.y = -12 * pph;
											//数量
											let text2 = new PIXI.Text(items.length + '/' + items.length, { fontFamily: 'shousha', fontSize: 18, fill: '#FFE4B5' });
											text2.anchor.set(0.5);
											text2.y = 16 * pph;
											sprite.addChild(text, text2);
											sprite.interactive = true;
											sprite.on('pointerup', groupup)
											sprite.on('pointerdown', groupdown)
											btnbox.addChild(sprite);

										});
										if (renderProcess != null) cancelAnimationFrame(renderProcess);
										addSprites(filteredSpritess, bbox);
										currentwujiang = event.target.name;
									}
									//console.log(lib.config.characters)
									function wujiangdown(event) {
										window.currentSprite = event.target;
										PIXI.sound.play('WinButton');
										if (isinputs == true) return;
										if (event.target.name && event.target.name != 'btn_lvl1_1b' && event.target.name != 'btn_lvl1_1a') {
											pressTimer = setTimeout(() => {
												if (!lib.config.characters.contains(event.target.name)) {
													event.target.filters = null;
													game.saveConfig('characters', lib.config.characters.add(event.target.name))
												} else {
													event.target.filters = [characterclose];
													game.saveConfig('characters', lib.config.characters.remove(event.target.name))
												}
											}, 1000)
										}


									}
									function groupup(event) {
										if (window.currentSprite != event.target) return;
										bbox.removeChildren();
										if (currentgroup == event.target.name) {
											let filteredSpritesg = filteredSprites.slice();
											if (renderProcess != null) cancelAnimationFrame(renderProcess); addSprites(filteredSpritesg, bbox);
											event.target.texture = gloader.resources.wujiang.textures['clt_lvl3_btn_off'];
											currentgroup = null;
										} else {
											event.target.texture = gloader.resources.wujiang.textures['clt_lvl3_btn_fg'];
											if (currentgroup != null && btnbox.getChildByName(currentgroup)) btnbox.getChildByName(currentgroup).texture = gloader.resources.wujiang.textures['clt_lvl3_btn_off'];
											currentgroup = event.target.name;
											let filteredSpritesk = filteredSprites.filter((sprite) => {
												return sprite.secgroup === event.target.name ||
													(Array.isArray(sprite.secgroup) && sprite.secgroup.includes(event.target.name));
											}).slice();
											if (renderProcess != null) cancelAnimationFrame(renderProcess);
											addSprites(filteredSpritesk, bbox);
										}
									}
									function groupdown(event) {
										window.currentSprite = event.target;

									}
									let renderProcess = null;
									function addSprites(filteredSpritess, bbox) {
										let ROW_SIZE = 4; // 每行放置的精灵数量
										let X_SPACING = 179 * ppw; // 精灵在x轴上的间隔
										let Y_SPACING = 192 * pph; // 精灵在y轴上的间隔
										let rzx = 2 * ppw; // x坐标
										let rzy = 14 * pph; // y坐标	
										let rzcounter = 0; // 当前行已经放置的精灵数量
										function addSprite() {
											const sprite = filteredSpritess.shift();
											if (!sprite) {
												renderProcess = null;
												return
											}
											sprite.x = rzx; // 设置 X 位置
											sprite.y = rzy; // 设置 Y 位置
											bbox.addChild(sprite); // 将精灵添加到 bbox 容器中
											rzx += X_SPACING; // 更新 X 位置
											rzcounter++; // 更新计数器
											if (rzcounter === ROW_SIZE) { // 如果已经添加了一行精灵
												rzx = 2 * ppw; // 重置 X 位置
												rzy += Y_SPACING; // 更新 Y 位置
												rzcounter = 0; // 重置计数器
											}
											renderProcess = requestAnimationFrame(addSprite);
										}
										renderProcess = requestAnimationFrame(addSprite);
									}
									function wujiangdonghua() {
										gsap.fromTo(//上面抽屉
											wujianghometop,
											{ y: -wujianghometop.height / 2 },
											{ duration: 0.5, y: 0, ease: "power4.out" });
										gsap.fromTo(//左边抽屉
											wujianghomeleft,
											{ x: -wujianghomeleft.width },
											{ duration: 0.5, x: 0, ease: "power4.out" });
										gsap.fromTo(//右边抽屉
											wujianghomeright,
											{ x: wujianghomeright.width },
											{ duration: 0.5, x: 0, ease: "power4.out" });
										gsap.fromTo(//下面抽屉
											wujiangmenubtn,
											{ y: pixiapp.screen.height },
											{ duration: 0.5, y: pixiapp.screen.height - wujiangmenubtn.height, ease: "power4.out" });
									}
								}
								function oppeen(container) {
									window.isOnhide = true;
									pixiapp.stage.children.forEach(function (child) {
										if (child !== uibg) {
											pixiapp.stage.removeChild(child);
										}
									});
									pixiapp.stage.addChild(container);
									window.container = container;
								}
								function onButtonUpx(event) {
									if (window.currentSprite != event.target) return;
									let set_dialog = settingbg.getChildByName('set_dialog')
									window.currentSprite = null;
									switch (event.target.name) {
										case "solobtn":
											entermodegame('single', 'dianjiang');
											if (window.isOnhide == false) rzshkz();
											break;
										case "versustwobtn":
											entermodegame('versus', 'two');
											if (window.isOnhide == false) rzshkz();
											break;
										case "menu1":
											PIXI.sound.play('WinButton')
											uihome.addChild(menuhome)
											break;
										case "rzclose":
											PIXI.sound.play('Report01')
											if (window.isOnhide != true) closee();
											break;
										case "pubbtn_close":
											PIXI.sound.play('PopUp')
											uihome.removeChild(menuhome)
											break;
										case "menuwu3":
											localStorage.removeItem('Network');
											xloader.destroy();
											yloader.destroy();
											zloader.destroy();
											pixiapp.destroy(true);
											window.location.href = lib.assetURL + 'extension/如真似幻/html/rzsh.html';
											break;
										case "menusi5":
											uihome.removeChild(menuhome)
											uihome.addChild(settinghome)
											break;
										case "menuyi6":
											if (confirm("是否重置本赛季天梯数据？重启生效")) {
												game.saveConfig('tianti_versus_two', {
													count: 0,
													top: 40,//青铜的士气上限
													win: 0,
													fail: 0,
													num: 0,
													top_win: 0,
													win_Cty: 0,
													xxingnum: 0,
												})
											};
											break;
										case "setab1":
											set_dialog.getChildByName('setab1').texture = zloader.resources.setting.textures['set_tab_choose'];
											set_dialog.getChildByName('setab2').texture = zloader.resources.setting.textures['set_tab']
											set_dialog.getChildByName('setab3').texture = zloader.resources.setting.textures['set_tab'];
											set_dialog.removeChild(settingright2);
											set_dialog.removeChild(settingright3);
											set_dialog.addChild(settingright1);
											break;
										case "setab2":
											set_dialog.getChildByName('setab1').texture = zloader.resources.setting.textures['set_tab'];
											set_dialog.getChildByName('setab2').texture = zloader.resources.setting.textures['set_tab_choose'];
											set_dialog.getChildByName('setab3').texture = zloader.resources.setting.textures['set_tab'];
											set_dialog.addChild(settingright2);
											set_dialog.removeChild(settingright3);
											set_dialog.removeChild(settingright1);
											break;
										case "setab3":
											set_dialog.getChildByName('setab1').texture = zloader.resources.setting.textures['set_tab'];
											set_dialog.getChildByName('setab2').texture = zloader.resources.setting.textures['set_tab'];
											set_dialog.getChildByName('setab3').texture = zloader.resources.setting.textures['set_tab_choose'];
											set_dialog.removeChild(settingright2);
											set_dialog.addChild(settingright3);
											set_dialog.removeChild(settingright1);
											break;
										case "wujiangback":
											closee();
											break;
										default:
									}
								}
								function onButtonDownx(event) {
									//点掉红点
									var redpoint = event.target.getChildByName("redPoint");
									event.target.removeChild(redpoint);
									window.currentSprite = event.target;
									PIXI.sound.play('TinyButton');
								}
								function entermodegame(mode, submode, playernum) {
									lib.config.mode = mode;
									game.saveConfig('mode', mode);
									if (submode != undefined) {
										game.saveConfig(mode + '_mode', submode, mode);
									}
									if (playernum != undefined) {
										lib.config.player_number = playernum;
										game.saveConfig('player_number', playernum, mode);
									}
								}
								function rzshkz() {
									delete window.inSplash;
									delete window.currentSprite;
									delete window.isOnhide;
									delete window.bbgp;
									delete window.container;
									delete window.moode
									window.resetGameTimeout = setTimeout(lib.init.reset, 5000);
									//	PIXI.sound.stopAll();
									PIXI.sound.removeAll();
									wujiangpool.forEach(sprite => { sprite.destroy(); }
									)
									spineks.destroy();
									xloader.destroy();
									yloader.destroy();
									zloader.destroy();
									gloader.destroy();
									brightnessFilter.destroy();
									characterclose.destroy();
									ticker.destroy();
									uihome.destroy();
									modehome.destroy();
									paiweihome.destroy();
									menuhome.destroy();
									settinghome.destroy();
									wujianghome.destroy();
									PIXI.utils.clearTextureCache();
									pixiapp.destroy(true);
									lib.init.js(lib.assetURL + 'mode', lib.config.mode, proceed);
								}
								function flyIn(sprite, duration) {
									let start = { x: pixiapp.screen.width + sprite.width }
									let end = { x: sprite.x };
									let ease = "power2.out";
									gsap.fromTo(sprite, duration, start, end, { ease }).restart();
								}
								window.inSplash = true;
								clearTimeout(window.resetGameTimeout);
								delete window.resetGameTimeout;
							})
						} else {
							proceed();
						}
						localStorage.removeItem(lib.configprefix + 'directstart');
						delete lib.init.init;
					}
				}
			}
		}, config: {
		}, help: {}, package: {
			character: {
				character: {
				},
				translate: {
				},
			},
			card: {
				card: {
				},
				translate: {
				},
				list: [],
			},
			skill: {
				skill: {
				},
				translate: {
				},
			},
			intro: "",
			author: "蒸",
			diskURL: "",
			forumURL: "",
			version: "1.4",
		}, files: { "character": [], "card": [], "skill": [] }
	}
})