document.addEventListener('DOMContentLoaded', function() {
  var mobNav = document.getElementById("toggle-main-navigation");
  var top = document.getElementById("top");
  var credits = document.querySelector('.credits');
  var oldfitlogo1 = document.querySelector('form>span>p');
  var oldfitlogo12 = document.querySelector('#logo');
  var oldfitlogo2 = document.querySelector('form>span>h2');
  var wrap = document.querySelector(".wrap");


  function create(htmlStr) {
      var frag = document.createDocumentFragment(),
          temp = document.createElement('div');
      temp.innerHTML = htmlStr;
      while (temp.firstChild) {
          frag.appendChild(temp.firstChild);
      }
      return frag;
  }

  //Replace header and policy ae
  var fragment = create('<div class="bbutton"><a href="http://www.breakthrough.org">Back to Breakthrough.org</a></div>');
  var fitnesslogo = create('<h1 id="fitnesslogo"><a href="http://www.breakthrough.org/" rel="home"></a></h1>');



  top.appendChild(fragment);
  wrap.appendChild(fitnesslogo);

  mobNav.className += " hideNow";
  credits.className += " hideNow";
  oldfitlogo1.className += " hideNow";
  oldfitlogo12.className += " hideNow";
  oldfitlogo2.className += " hideNow";


}, false);
