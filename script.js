// 获取所有卡片
let cardAll = document.querySelectorAll('.card');
let cardName = ['card1', 'card2', 'card3', 'cards1', 'cards2'];
let i = 1; // 当前索引
let iIndex = [0, 1, 2, 3, 4];

// 数组取差集
function getDifference(array1, array2) {
    return array1.filter(item => !array2.includes(item));
}

// 定义每张卡片对应的跳转链接
let cardLinks = [
    "https://www.notion.so/magical-designer-qingxi/8830b297fb8d47a88155229a87379ead#b7a8980c22d943498fd2af8e44a3b990", // card1 对应的页面
    'page1.html', // card2 对应的页面
    'page3.html', // card3 对应的页面
    'https://magical-designer-qingxi.notion.site/e3ac9ad00b844f7187ad52d4f71dbb9b?pvs=4', // cards1 对应的页面
    'https://magical-designer-qingxi.notion.site/Arrival-6eabb85374df4dd8bb52df240f1b45c0?pvs=4'  // cards2 对应的页面
];

// 遍历所有卡片，添加点击事件
cardAll.forEach((card, index) => {
    card.addEventListener('click', () => {
        window.location.href = cardLinks[index]; // 跳转到对应的链接
    });
});

// 绑定鼠标滚轮事件
document.addEventListener('wheel', function (event) {
    // 计算差集，获取不在显示范围内的卡片
    let Darr = getDifference(iIndex, [i, i + 1 > 4 ? 0 : i + 1, i - 1 < 0 ? 4 : i - 1]);

    if (event.deltaY < 0) {
        // 向上滚动
        for (let j = 0; j < Darr.length; j++) {
            cardAll[Darr[j]].classList.remove(...cardName);
            cardAll[Darr[j]].style.transition = 'all 0s';
            cardAll[Darr[j]].classList.add('cards2');
        }
        setTimeout(() => {
            cardAll[i].classList.remove(...cardName);
            cardAll[i + 1 > 4 ? 0 : i + 1].classList.remove(...cardName);
            cardAll[i - 1 < 0 ? 4 : i - 1].classList.remove(...cardName);

            cardAll[i - 1 < 0 ? 4 : i - 1].classList.add('cards1');
            cardAll[i - 1 < 0 ? 4 : i - 1].style.transition = 'all 0.3s';
            cardAll[i - 1 < 0 ? 4 : i - 1].style.opacity = '0';

            i++;
            if (i > 4) {
                i = 0;
            }

            cardAll[i + 1 > 4 ? 0 : i + 1].classList.add('card3');
            cardAll[i + 1 > 4 ? 0 : i + 1].style.transition = 'all 1s';
            cardAll[i + 1 > 4 ? 0 : i + 1].style.opacity = '1';
            cardAll[i].classList.add('card2');
            cardAll[i].style.transition = 'all 1s';
            cardAll[i - 1 < 0 ? 4 : i - 1].classList.add('card1');
            cardAll[i - 1 < 0 ? 4 : i - 1].style.transition = 'all 1s';
        }, 100);
    } else if (event.deltaY > 0) {
        // 向下滚动
        for (let j = 0; j < Darr.length; j++) {
            cardAll[Darr[j]].classList.remove(...cardName);
            cardAll[Darr[j]].style.transition = 'all 0s';
            cardAll[Darr[j]].classList.add('cards1');
        }
        setTimeout(() => {
            cardAll[i].classList.remove(...cardName);
            cardAll[i + 1 > 4 ? 0 : i + 1].classList.remove(...cardName);
            cardAll[i - 1 < 0 ? 4 : i - 1].classList.remove(...cardName);

            cardAll[i + 1 > 4 ? 0 : i + 1].classList.add('cards2');
            cardAll[i + 1 > 4 ? 0 : i + 1].style.transition = 'all 0.3s';
            cardAll[i + 1 > 4 ? 0 : i + 1].style.opacity = '0';

            i--;
            if (i < 0) {
                i = 4;
            }

            cardAll[i - 1 < 0 ? 4 : i - 1].classList.add('card1');
            cardAll[i - 1 < 0 ? 4 : i - 1].style.transition = 'all 1s';
            cardAll[i - 1 < 0 ? 4 : i - 1].style.opacity = '1';
            cardAll[i].classList.add('card2');
            cardAll[i].style.transition = 'all 1s';
            cardAll[i + 1 > 4 ? 0 : i + 1].classList.add('card3');
            cardAll[i + 1 > 4 ? 0 : i + 1].style.transition = 'all 1s';
        }, 100);
    }
});
