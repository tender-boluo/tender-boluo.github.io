(function() {
        window.onclick = function(event) {
            var heart = document.createElement("b");
            heart.onselectstart = new Function('event.returnValue=false');
            var flag = Math.random();
            if(flag > 0.5)
                document.body.appendChild(heart).innerHTML = "<img src=\"images\\apple.png\"/>";
            else
                document.body.appendChild(heart).innerHTML = "等下给你看菠萝";

            heart.style.cssText = "position: fixed;left:-100%;";

            var f = 12, // 字体大小
                x = event.clientX - f / 2, // 横坐标
                y = event.clientY - f, // 纵坐标
                c = randomColor(), // 随机颜色
                a = 1, // 透明度
                s = 1.2; // 放大缩小
            var timer = setInterval(function() {

                if (a <= 0) {

                    document.body.removeChild(heart);

                    clearInterval(timer);

                } else {

                    heart.style.cssText = "font-size:12px;cursor: default;position: fixed;color:" + c + ";left:" + x + "px;top:" + y + "px;opacity:" + a + ";transform:scale(" + s + ");";

                    y--;
                    a -= 0.016;
                    s += 0.002;

                }

            }, 12)

        }
        // 随机颜色
        function randomColor() {

            return "rgb(" + (~~(Math.random() * 255)) + "," + (~~(Math.random() * 255)) + "," + (~~(Math.random() * 255)) + ")";

        }
    }())