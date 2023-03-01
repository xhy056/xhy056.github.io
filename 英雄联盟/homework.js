/*var data = [{
    name: "瘟疫之源",
    // 缩略图
    img_url: "https://ossweb-img.qq.com/images/lol/img/champion/Twitch.png",
    // 技能 技能描述
    skill: [{
        title: "死亡毒液",
        img_url: "https://game.gtimg.cn/images/lol/act/img/passive/Twitch_Passive.png",
        s_des: "图奇的攻击会使目标感染死亡毒液，每秒造成真实伤害。"
    }, {
        title: "埋伏",
        img_url: "https://game.gtimg.cn/images/lol/act/img/spell/TwitchHideInShadows.png",
        s_des: "图奇进入伪装状态，持续一段短暂的时间并且移动速度得到提升。当离开伪装状态后，图奇会暂时获得攻击速度加成。<br>当一名身上带有【死亡毒液】的敌方英雄死亡时，此技能的冷却会重置。"
    }, {
        title: "剧毒之桶",
        img_url: "https://game.gtimg.cn/images/lol/act/img/spell/TwitchVenomCask.png",
        s_des: "图奇扔出一个毒性之桶来引爆一个区域，对区域内的敌人造成减速效果，并对他们施加死亡毒液效果。"
    }, {
        title: "毒性爆发",
        img_url: "https://game.gtimg.cn/images/lol/act/img/spell/TwitchExpunge.png",
        s_des: "图奇引爆他那卑劣的毒素，对已中毒的敌人进行更为深远的蹂躏。"
    }, {
        title: "火力全开",
        img_url: "https://game.gtimg.cn/images/lol/act/img/spell/TwitchFullAutomatic.png",
        s_des: "图奇让十字弩火力全开，快速地朝他面前射出强力且射程极远的穿刺箭头。"
    }],
    // 攻击 法术 防御 上手难度
    trait: {
        attack: 9,
        defense: 3,
        spells: 2,
        difficulty: 6
    },
    // 大图背景
    big_img_url:"https://game.gtimg.cn/images/lol/act/img/skin/big29000.jpg",
    // 英雄简介
    des: "虽然出身只是一只瘟疫老鼠，但图奇却靠热情成为了一位污秽的鉴赏家，他可不介意弄脏自己的爪子。他使用一把炼金动力十字弩瞄准皮城人的镀金心脏，发誓要让这些生活在上层都市的人们知道他们真实的自我究竟有多么肮脏。他总是鬼鬼祟祟蹑手蹑脚，不是在地沟区翻来翻去，就是在别的地方深挖人类的垃圾堆，寻找被丢弃的宝藏……或者是一块发霉的三明治。"
}, {
    name: "复仇焰魂",
    img_url: "https://ossweb-img.qq.com/images/lol/img/champion/Brand.png",
    skill: [{
        title: "炽热之焰",
        img_url: "https://game.gtimg.cn/images/lol/act/img/passive/BrandP.png",
        s_des: "布兰德的技能会对他的目标施加【烈焰焚身】效果，在4秒里持续造成伤害，最多可叠加3次。如果布兰德击杀了身上带有【烈焰焚身】的敌人，那么他会回复法力值。当【炽热之焰】在一名英雄或大型野怪身上叠至满层时，它会变得不稳定。它会在2秒内爆炸，在目标附近的区域施加法术特效并造成大量伤害。"
    }, {
        title: "火焰烙印",
        img_url: "https://game.gtimg.cn/images/lol/act/img/spell/BrandQ.png",
        s_des: "布兰德向前方放出一团可造成魔法伤害的火球。如果目标带有【烈焰焚身】效果，那么【Q火焰烙印】将使目标晕眩1.5秒。"
    }, {
        title: "烈焰之柱",
        img_url: "https://game.gtimg.cn/images/lol/act/img/spell/BrandW.png",
        s_des: "在短暂的延迟后，布兰德会在目标区域创造一根烈焰之柱，来对范围内的敌方单位造成魔法伤害。带有【烈焰焚身】效果的单位会额外受到25%伤害。"
    }, {
        title: "烈火燃烧",
        img_url: "https://game.gtimg.cn/images/lol/act/img/spell/BrandE.png",
        s_des: "布兰德在目标身上引发一阵强力的爆裂，对目标造成魔法伤害。如果目标带有【烈焰焚身】效果，那么【E烈火燃烧】还会扩散至目标附近的敌人。"
    }, {
        title: "烈焰风暴",
        img_url: "https://game.gtimg.cn/images/lol/act/img/spell/BrandR.png",
        s_des: "布兰德释放一颗破坏力极强的火焰之种，在每次弹跳时造成魔法伤害，最多可弹跳5次。弹跳会优先以带有即将满层的【炽热之焰】效果的英雄为目标。如果目标带有【烈焰焚身】效果，那么【R烈焰风暴】将使目标短暂减速。"
    }],
    trait: {
        attack: 2,
        defense: 9,
        spells: 2,
        difficulty: 4
    },
    big_img_url:"https://game.gtimg.cn/images/lol/act/img/skin/big63000.jpg",
    des: "基根·诺和曾经是一名普通弗雷尔卓德部族居民，现在则变成了另一种生物，布兰德。他的身世警醒着后人，被更强大的力量所诱惑会带来什么后果。基根为了追寻传说中的世界符文，背叛了自己的同伴并将符文据为己有，就在那一瞬间，这个人彻底消失了。他的灵魂被彻底燃尽，他的身躯成为了活体烈焰的容器，如今，布兰德游荡在瓦洛兰，寻觅着其他的符文。他曾遭受的苦难，凡人活上十几辈子也未必能够经历，而他发誓此仇必报。"
}, {
    name: "疾风剑豪",
    img_url: "https://ossweb-img.qq.com/images/lol/img/champion/Yasuo.png",
    skill: [{
        title: "浪客之道",
        img_url: "https://game.gtimg.cn/images/lol/act/img/passive/Yasuo_Passive.png",
        s_des: "亚索的暴击几率翻倍。此外，亚索会在移动时积攒一层护盾。护盾会在他受到来自英雄或野怪的伤害时触发。"
    }, {
        title: "斩钢闪",
        img_url: "https://game.gtimg.cn/images/lol/act/img/spell/YasuoQ1Wrapper.png",
        s_des: "向前出剑，呈直线造成伤害。<br>在命中时，斩钢闪会获得一层旋风烈斩效果，持续数秒。在积攒2层旋风烈斩效果后，斩钢闪会形成一阵能够击飞敌人的旋风。<br>斩钢闪被视为普通攻击，并且可以从所有作用于普攻的东西上获得收益。"
    }, {
        title: "风之障壁",
        img_url: "https://game.gtimg.cn/images/lol/act/img/spell/YasuoW.png",
        s_des: "形成一个持续4秒的气流之墙，来阻挡敌方的飞行道具。"
    }, {
        title: "踏前斩",
        img_url: "https://game.gtimg.cn/images/lol/act/img/spell/YasuoE.png",
        s_des: "向目标敌人突进，造成魔法伤害。每次施法都会使你的下一次突进的基础伤害提升，直到抵达上限。<br>在若干秒内无法对相同敌人重复施放。<br>如果在突进的过程中施放斩钢闪，那么斩钢闪就会呈环状出剑。"
    }, {
        title: "狂风绝息斩",
        img_url: "https://game.gtimg.cn/images/lol/act/img/spell/YasuoR.png",
        s_des: "闪烁到一个被击飞的敌方英雄身边，造成物理伤害，并使范围内的所有被击飞的敌人滞留在空中。获得满额的剑意值，但会重置旋风烈斩的层数。<br>在接下来的若干秒里，亚索的暴击会获得显著的额外护甲穿透加成值。"
    }],
    trait: {
        attack: 8,
        defense: 4,
        spells: 4,
        difficulty: 10
    },
    big_img_url:"https://game.gtimg.cn/images/lol/act/img/skin/big157000.jpg",
    des: "亚索是一个百折不屈的艾欧尼亚人，也是一名身手敏捷的御风剑客。这位生性自负的年轻人，被误认为杀害长老的凶手——由于无法证明自己的清白，他出于自卫而杀死了自己的哥哥。虽然长老死亡的真相已然大白，亚索还是无法原谅自己的所作所为。他在家园的土地上流浪，只有疾风指引着他的剑刃。"
}]*/

var data = [{
    name: "瘟疫之源",
    // 缩略图
    img_url: "./images/Twitch.png",
    // 技能 技能描述
    skill: [{
        title: "死亡毒液",
        img_url: "./images/Twitch_Passive.png",
        s_des: "图奇的攻击会使目标感染死亡毒液，每秒造成真实伤害。"
    }, {
        title: "埋伏",
            img_url: "./images/TwitchHideInShadows.png",
        s_des: "图奇进入伪装状态，持续一段短暂的时间并且移动速度得到提升。当离开伪装状态后，图奇会暂时获得攻击速度加成。<br>当一名身上带有【死亡毒液】的敌方英雄死亡时，此技能的冷却会重置。"
    }, {
        title: "剧毒之桶",
            img_url: "./images/TwitchVenomCask.png",
        s_des: "图奇扔出一个毒性之桶来引爆一个区域，对区域内的敌人造成减速效果，并对他们施加死亡毒液效果。"
    }, {
        title: "毒性爆发",
            img_url: "./images/TwitchExpunge.png",
        s_des: "图奇引爆他那卑劣的毒素，对已中毒的敌人进行更为深远的蹂躏。"
    }, {
        title: "火力全开",
            img_url: "./images/TwitchFullAutomatic.png",
        s_des: "图奇让十字弩火力全开，快速地朝他面前射出强力且射程极远的穿刺箭头。"
    }],
    // 攻击 法术 防御 上手难度
    trait: {
        attack: 9,
        defense: 3,
        spells: 2,
        difficulty: 6
    },
    // 大图背景
    big_img_url: "./images/big29000.webp",
    // 英雄简介
    des: "虽然出身只是一只瘟疫老鼠，但图奇却靠热情成为了一位污秽的鉴赏家，他可不介意弄脏自己的爪子。他使用一把炼金动力十字弩瞄准皮城人的镀金心脏，发誓要让这些生活在上层都市的人们知道他们真实的自我究竟有多么肮脏。他总是鬼鬼祟祟蹑手蹑脚，不是在地沟区翻来翻去，就是在别的地方深挖人类的垃圾堆，寻找被丢弃的宝藏……或者是一块发霉的三明治。"
}, {
    name: "复仇焰魂",
        img_url: "./images/Brand.png",
    skill: [{
        title: "炽热之焰",
        img_url: "./images/BrandP.png",
        s_des: "布兰德的技能会对他的目标施加【烈焰焚身】效果，在4秒里持续造成伤害，最多可叠加3次。如果布兰德击杀了身上带有【烈焰焚身】的敌人，那么他会回复法力值。当【炽热之焰】在一名英雄或大型野怪身上叠至满层时，它会变得不稳定。它会在2秒内爆炸，在目标附近的区域施加法术特效并造成大量伤害。"
    }, {
        title: "火焰烙印",
            img_url: "./images/BrandQ.png",
        s_des: "布兰德向前方放出一团可造成魔法伤害的火球。如果目标带有【烈焰焚身】效果，那么【Q火焰烙印】将使目标晕眩1.5秒。"
    }, {
        title: "烈焰之柱",
            img_url: "./images/BrandW.png",
        s_des: "在短暂的延迟后，布兰德会在目标区域创造一根烈焰之柱，来对范围内的敌方单位造成魔法伤害。带有【烈焰焚身】效果的单位会额外受到25%伤害。"
    }, {
        title: "烈火燃烧",
            img_url: "./images/BrandE.png",
        s_des: "布兰德在目标身上引发一阵强力的爆裂，对目标造成魔法伤害。如果目标带有【烈焰焚身】效果，那么【E烈火燃烧】还会扩散至目标附近的敌人。"
    }, {
        title: "烈焰风暴",
            img_url: "./images/BrandR.png",
        s_des: "布兰德释放一颗破坏力极强的火焰之种，在每次弹跳时造成魔法伤害，最多可弹跳5次。弹跳会优先以带有即将满层的【炽热之焰】效果的英雄为目标。如果目标带有【烈焰焚身】效果，那么【R烈焰风暴】将使目标短暂减速。"
    }],
    trait: {
        attack: 2,
        defense: 9,
        spells: 2,
        difficulty: 4
    },
        big_img_url: "./images/big63000.webp",
    des: "基根·诺和曾经是一名普通弗雷尔卓德部族居民，现在则变成了另一种生物，布兰德。他的身世警醒着后人，被更强大的力量所诱惑会带来什么后果。基根为了追寻传说中的世界符文，背叛了自己的同伴并将符文据为己有，就在那一瞬间，这个人彻底消失了。他的灵魂被彻底燃尽，他的身躯成为了活体烈焰的容器，如今，布兰德游荡在瓦洛兰，寻觅着其他的符文。他曾遭受的苦难，凡人活上十几辈子也未必能够经历，而他发誓此仇必报。"
}, {
    name: "疾风剑豪",
        img_url: "./images/Yasuo.png",
    skill: [{
        title: "浪客之道",
        img_url: "./images/Yasuo_Passive.png",
        s_des: "亚索的暴击几率翻倍。此外，亚索会在移动时积攒一层护盾。护盾会在他受到来自英雄或野怪的伤害时触发。"
    }, {
        title: "斩钢闪",
            img_url: "./images/YasuoQ1Wrapper.png",
        s_des: "向前出剑，呈直线造成伤害。<br>在命中时，斩钢闪会获得一层旋风烈斩效果，持续数秒。在积攒2层旋风烈斩效果后，斩钢闪会形成一阵能够击飞敌人的旋风。<br>斩钢闪被视为普通攻击，并且可以从所有作用于普攻的东西上获得收益。"
    }, {
        title: "风之障壁",
            img_url: "./images/YasuoW.png",
        s_des: "形成一个持续4秒的气流之墙，来阻挡敌方的飞行道具。"
    }, {
        title: "踏前斩",
            img_url: "./images/YasuoE.png",
        s_des: "向目标敌人突进，造成魔法伤害。每次施法都会使你的下一次突进的基础伤害提升，直到抵达上限。<br>在若干秒内无法对相同敌人重复施放。<br>如果在突进的过程中施放斩钢闪，那么斩钢闪就会呈环状出剑。"
    }, {
        title: "狂风绝息斩",
            img_url: "./images/YasuoR.png",
        s_des: "闪烁到一个被击飞的敌方英雄身边，造成物理伤害，并使范围内的所有被击飞的敌人滞留在空中。获得满额的剑意值，但会重置旋风烈斩的层数。<br>在接下来的若干秒里，亚索的暴击会获得显著的额外护甲穿透加成值。"
    }],
    trait: {
        attack: 8,
        defense: 4,
        spells: 4,
        difficulty: 10
    },
        big_img_url: "./images/big157000.webp",
    des: "亚索是一个百折不屈的艾欧尼亚人，也是一名身手敏捷的御风剑客。这位生性自负的年轻人，被误认为杀害长老的凶手——由于无法证明自己的清白，他出于自卫而杀死了自己的哥哥。虽然长老死亡的真相已然大白，亚索还是无法原谅自己的所作所为。他在家园的土地上流浪，只有疾风指引着他的剑刃。"
}]