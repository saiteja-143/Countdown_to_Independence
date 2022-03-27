let func = function () {
  setTimeout(() => {
    let first = document.getElementById("first");
    first.innerHTML = "00:10";
    setTimeout(() => {
      first.innerHTML = "00:09";
      setTimeout(() => {
        first.innerHTML = "00:08";
        setTimeout(() => {
          first.innerHTML = "00:07";
          setTimeout(() => {
            first.innerHTML = "00:06";
            setTimeout(() => {
              first.innerHTML = "00:05";
              setTimeout(() => {
                first.innerHTML = "00:04";
                setTimeout(() => {
                  first.innerHTML = "00:03";
                  setTimeout(() => {
                    first.innerHTML = "00:02";
                    setTimeout(() => {
                      first.innerHTML = "00:01";
                      setTimeout(() => {
                        // document.body.style.backgroundImage =
                        //   "url('indian_flag2.jpg')";
                        // document.body.style.backgroundRepeat = "no-repeat";
                        // document.body.style.backgroundSize = "cover";
                        // document.body.style.backgroundPosition = "center";
                        document.body.style.backgroundColor = "yellow";
                        first.innerHTML = "Happy Independence Day";
                      }, 1000);
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
};
func();
