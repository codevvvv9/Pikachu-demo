!function () {
    var duration = 50
    $('.actions').on('click', 'button', function (e) {
        let $button = $(e.currentTarget) //button
        let speed = $button.attr('data-speed')
        console.log(speed)
        $button.addClass('active').siblings('.active').removeClass('active')
        switch (speed) {
            case 'slow':
                duration = 100
                break;
            case 'normal':
                duration = 50
                break;
            case 'fast':
                duration = 10
                break;
            default:
                break;
        }
    })
    /**
     * 完成动态效果的函数
     * @param {*前缀} prefix 
     * @param {*要动态添加的代码} code 
     * @param {* 回调函数} fn 
     */
    function writeCode(prefix, code, fn) {
        let container = document.querySelector('#code')
        let styleTag = document.querySelector('#styleTag')
        let n = 0
        let id
        id = setTimeout(function run() {
            n += 1
            container.innerHTML = code.substring(0, n)
            styleTag.innerHTML = code.substring(0, n)
            container.scrollTop = container.scrollHeight
            if (n < code.length) {
                id = setTimeout(run, duration)
            } else {
                fn && fn.call()
            }
        }, duration)

    }

    let code = `
/*
 * 首先准备皮卡丘的皮
 */
.preview{
    height: 100%;
    // border: 1px solid green;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #FFE600;
}
.wrapper{
    width: 100%;
    height: 165px;
    position: relative;
}
.wrapper > :not(:last-child){
    z-index: 1;
}
/*
 * 然后画上皮卡丘的小鼻子
 */
.nose{
    width: 0;
    height: 0;
    border: 11px solid;
    border-color: black transparent 
    transparent transparent;
    border-radius: 12px;
    position: absolute;
    left: 50%;
    top: 28px;
    margin-left: -12px;
    /* transform: translateX(-50%); 效果与上述一样的*/
}
/*
 * 画皮卡丘的两只眼睛
 */
.eye{
    width: 49px;
    height: 49px;
    background: #2E2E2E;
    position: absolute;
    border-radius: 50%;
    border: 2px solid #000000;
}
/*
 * 然后画皮卡丘的眼珠
 */
.eye::before{
    content: '';
    display: block;
    width: 24px;
    height: 24px;
    background: white;
    border-radius: 50%;
    position: absolute;
    left: 6px;
    top: -1px;
    border: 2px solid #000;
}
/*
 * 左眼睛跳跳
 */
.eye.left{
    right: 50%;
    margin-right: 90px;
}
/*
 * 右眼睛跳跳
 */
.eye.right{
    left: 50%;
    margin-left: 90px;
}
/*
 * 然后画上皮卡丘的大脸蛋
 */
.face{
    width: 68px;
    height: 68px;
    background: red;
    border: 2px solid black;
    border-radius: 50%;
    position: absolute;
    top: 85px;
}
/*
 * 把脸放到正确的位置上
 * 画上皮卡丘的左桃花
 */
.face.left{
    right: 50%;
    margin-right: 116px;
}
/*
 * 皮卡丘的右桃花
 */
.face.right{
    left: 50%;
    margin-left: 116px;
}
/*
 * 皮卡丘的上嘴唇
 */
.upperLip{
    height: 25px;
    width: 80px;
    border: 3px solid black;
    position: absolute;
    top: 50px;
    background: #FFE600;
}
/*
 * 皮卡丘的左边的小胡子
 */
.upperLip.left{
    right: 50%;
    border-bottom-left-radius: 40px 25px;
    border-top: none;
    border-right: none;
    transform: rotate(-20deg);
}
/*
 * 皮卡丘的右边的小胡子
 */
.upperLip.right{
    left: 50%;
    border-bottom-right-radius: 40px 25px;
    border-top: none;
    border-left: none;
    transform: rotate(20deg);
}
/*
 * 皮卡丘的下嘴唇
 */
.lowerLip-wrapper{
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -150px;
    height: 110px; 
    width: 300px;
    overflow: hidden;
}
.lowerLip{
    width: 300px;
    height: 3500px;
    background: #9B000A;
    border-radius: 200px/2000px;
    border: 2px solid black;
    position: absolute;
    bottom: 0;
    overflow: hidden;
}
/*
 * 皮卡丘的可爱n(*≧▽≦*)n的舌头
 */
.lowerLip::after{
    content: '';
    position: absolute;
    bottom: -20px;
    width: 100px;
    height: 100px;
    background: #FF485F;
    left: 50%;
    margin-left: -50px;
    border-radius: 50%;
}
/*
 * 好啦，花完啦，送你一只皮卡丘
 */
`

    writeCode('', code)

  
}.call()