(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()

  function change() {
    let selectChoice = document.getElementsByName("product-choice")[0].value;
    if (selectChoice == 1) {
        let checkBox = document.getElementById("option-choices");
        checkBox.innerHTML = "";
    }
    if (selectChoice == 2) {
        let checkBox = document.getElementById("option-choices");
        checkBox.innerHTML = '\
        <input type="radio" class="one" id="onecomp" name="someGroupName" required="">\n \
        <label for="onecomp">Без документов</label>\n \
        <input type="radio" class="two" id="twocomp" name="someGroupName" required="">\n \
        <label for="twocomp">С документами</label> \
        ';
    }
    else if (selectChoice == 3) {
        let checkBox = document.getElementById("option-choices");
        checkBox.innerHTML = '\
        <input type="checkbox" id="acryl">\n \
        <label for="acryl">С ошейником</label>\n \
        <input type="checkbox" id="base">\n \
        <label for="base">С купанием</label>\n \
        <br/>\n \
        <input type="checkbox" id="powder">\n \
        <label for="powder">С нарядом</label> \
        ';
    }
  }
  
  function getSum() {
    let selectChoice = document.getElementsByName("product-choice")[0].value;
    let sums = [90, 150, 200];
    let resultSum = sums[selectChoice - 1] + checkOptions(selectChoice);
  
    let amount = document.getElementById("amount-of-products").value;
    if (amount.match(/^[0-5]$/))
        resultSum *= amount;
    else
        alert("Error");
    let result = document.getElementById("result");
  
    result.innerHTML = resultSum;
    let prodPrice = document.getElementById("prodPrice");
    prodPrice.innerHTML = price + " рублей";
  }
  
  function checkOptions(choice) {
    if (choice == 2) {
        let checkbox1 = document.getElementById("onecomp");
        let checkbox2 = document.getElementById("twocomp");
  
        return (checkbox1.checked ? 10 : 0) || (checkbox2.checked ? 15 : 0);
    }
    else if (choice == 3) {
        let checkbox1 = document.getElementById("acryl");
        let checkbox2 = document.getElementById("base");
        let checkBox3 = document.getElementById("powder");
  
        return (checkbox1.checked ? 10 : 0) + (checkbox2.checked ? 15 : 0) + (checkBox3.checked ? 20 : 0);
    }
    else 
        return 0;
  }

  $(".lazy").slick({
    lazyLoad: "ondemand",
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 800
  });

  document.getElementById("openFormButton").addEventListener("click", function() {
    document.getElementById("popupForm").style.display = "block";
    history.pushState({ formOpen: true }, '', '/masilova23.github.io');
    
  });
  


  document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    var slapform = new Slapform();
slapform.submit({
form: '4yFFATQTl',
data: {
name: '',
message: '',
}
})
    .then(function (response) {
    console.log('Success', response)
    })
    .catch(function (e) {
    console.error('Fail', e)
    })

    document.getElementById("popupForm").style.display = "none"; 
  });
  function closePopup() {
    document.getElementById("popupForm").style.display = "none";
    window.location.href = "masilova23.github.io/1/2/index.html";
  }