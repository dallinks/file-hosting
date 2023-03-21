if(!document.querySelector('#InterestButton')){  
   async function postData( data = {} ) {
      const response = await fetch('https://api.connect.advantismed.com/User/registercandidatelead', {
        method : 'POST',
        mode : 'cors',
        headers: {
        'Content-Type': 'application/json',
        'Host' : 'api.connect.advantismed.com',
        'Content-Length' : JSON.stringify(data).length
		},
		body : JSON.stringify(data)
		});
	return response;
  }
  const interestButton = document.getElementById('SubmitButton');
  const modal = document.querySelector('.modal');
  interestButton.addEventListener('click', function submitButton(){
    if((document.getElementById('name').value) == '' || (document.getElementById('email').value) == '' || (document.getElementById('phone').value) == ''){
      return
    }
    if (/^[-!#$%&'*+0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+0-9=?A-Z^_a-z{|}~])*@[a-zA-Z](-?[a-zA-Z0-9])*(\.[a-zA-Z](-?[a-zA-Z0-9])*)+$/.test(document.getElementById('email').value) != true || /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(document.getElementById('phone').value) != true || /^[a-zA-Z.'-]+(?: +[a-zA-Z.'-]+)+$/.test(document.getElementById('name').value) != true || document.querySelector('#licenseSelector').selectedOptions.length == 0){
      return
    }
    else{
      name = document.querySelector('.text-field-5').value;
      phone = document.querySelector('.text-field-6').value;
      email = document.querySelector('.text-field-7').value;

      const message = document.getElementById('success-modal-message').innerHTML;
      document.getElementById('success-modal-message').innerHTML = message.replace('Clinician,',name);

      localStorage.setItem('clinician','{"firstName" : "' + (document.querySelector('.text-field-5').value).slice(0,(document.querySelector('.text-field-5').value).indexOf(" ")) + '", "lastName" : "' + (document.querySelector('.text-field-5').value).slice((document.querySelector('.text-field-5').value).indexOf(' ')+1) + '", "phone" : "' + document.querySelector('.text-field-6').value + '", "email" : "' + document.querySelector('.text-field-7').value + '"}');
      var licenseList = [];
      for(let i=0; i<document.querySelector('#licenseSelector').selectedOptions.length;i++){licenseList.push(document.querySelector('#licenseSelector').selectedOptions[i].value)};

      postData({
        "AuthorizationKey" : "43750fe0-fce9-44d9-aa67-3ab6ade4d125",
        "Email": document.querySelector('.text-field-7').value,
        "FirstName": (JSON.parse(localStorage.getItem('clinician'))).firstName,
        "LastName": (JSON.parse(localStorage.getItem('clinician'))).lastName,
        "LeadSpecialty": specialty,
        "Phone": document.querySelector('.text-field-6').value,
        "PreferredContactMethod": "text",
        "LeadPreferredLocation": preferredLocation,
        "Source" : "AC Interested",
        "licenseStateList" : licenseList
      })
        .then((item) => {console.log(item)})
      }
    });

  modal.addEventListener('click', function(event) {
    if(event.target.matches('.modal') && !event.target.matches('.form-block-2')){
      document.querySelector('.image-6').click();
    }
  });
}
