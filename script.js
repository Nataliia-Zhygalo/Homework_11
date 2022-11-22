
/*hero = ['Ivan'];
native = ['York','Of'];
destination = ['Poltava','In'];

Используя циклы, if/else, switch/case и методы .push(), .pop(), .unshift(), .shift(), .concat(), .splice(), .reverse() .join():
1. Объединить массивы destination, native, hero в общий массив rainbow.
2. Сделать реверс элементов полученного массива rainbow.
3. Изменить/добавить элементы массива rainbow так, что бы в итоге получился массив вида ['Richard','Of','York','Gave','Battle','In','Vain'];
4. Вывести элементы полученного массива в html в виде, который представлен в прикрепленном рисунке rainbow.png.
Шрифт надписей на картинке Quicksand. Вы можете взять любой))
Использовать все методы не обязательно! Берем только те, которые помогут вам привести массив к такому виду, что бы вывести его как на прикрепленной картинке rainbow.png.*/

hero = ['Ivan'];
native = ['York','Of'];
destination = ['Poltava','In'];
rainbow = hero.concat(native, destination);
console.log(rainbow);
 newRainbow = rainbow.reverse();
 console.log(newRainbow);
for (i = 0; i < newRainbow.length; i++) {
    if (newRainbow[i] === newRainbow[0]) {
        newRainbow[i] = 'Richard';  
    } if (newRainbow[i] === newRainbow [3]) {
       newRainbow.splice(3,1);     
    } if (newRainbow[i] === newRainbow [1]) {
       newRainbow.splice(1, 1);
    } if (newRainbow[i] === newRainbow [2]) {
       newRainbow.push('Gave','Battle', 'In','Vain');   
    }
    }
 console.log(newRainbow);
colors = ['red','orange','yellow','green','blue','darkblue','purple'];
circleArr = [];
for (i = 0; i < colors.length; i++) {     
 circleArr.push(`<div class="wrap"><div class="circle" style="background-color: ${colors[i]}"></div><p>${newRainbow[i]}<p></div>`);
console.log(`${circleArr[i]} - ${newRainbow[i]}`) 
};  
document.write(`
    <div class="wrap">
      <div>${circleArr.join(" ")}
      </div>
    </div>
`);



 //In Poltava of York Ivan
 //'Richard','Of','York','Gave','Battle','In','Vain'
 
  

   





