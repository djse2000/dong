    var links = {
      setcolor:function(color){
       //   var alist = document.querySelectorAll('a');
       //   var i = 0;
       //   while(i < alist.length){
       //   alist[i].style.color = color;
       //   i = i+1;
       //   }
       $('a').css('color', color)
       }
      }

    function bodysetcolor(color){
      document.querySelector('body').style.color = color;
    }

    function nightsyhandler(self){
      var target = document.querySelector('body');
      if (self.value === 'night'){
         target.style.backgroundColor = 'black';
         bodysetcolor('white');
         self.value = 'day';

         links.setcolor('powderblue');

      } else {
        target.style.backgroundColor = 'white';
        bodysetcolor('black');
        self.value = 'night';

        links.setcolor('blue');
        }
    }
