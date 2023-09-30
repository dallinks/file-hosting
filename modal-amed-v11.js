if(!document.querySelector('#InterestButton')){  
	
	function changeButton(){
		const a = document.querySelector('#InterestButton2');
		a.removeAttribute('href');
		a.style.textDecoration = 'none';
		a.style.cursor = 'default';
		a.innerHTML = 'Info Sent to Recruiter!';
		a.style.color = 'black';
		a.style.background = '#EBEBEB';
		a.style.pointerEvents = 'none';
		a.style.width = 'unset';
		a.style.maxWidth = 'unset';
		a.style.paddingRight = '45px';
		a.style.paddingLeft = '45px';
	}
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

async function submitForm(){
	var map2 = new Map([
	  ['admin-management',[2000131]],
	  ['ambulatory', [2000049,2000090]],
	  ['anesthesia-tech',[2000008]],
	  ['behavioral-health-tech',[2000009]],
	  ['crna',[2000177,2000076,2000117]],
	  ['ct-tech',[2000014]],
	  ['cvicu',[2000155,2000054,2000095]],
	  ['cvor',[2000156,2000055,2000096]],
	  ['cvor-tech',[2000015]],
	  ['case-manager',[2000152,2000051,2000092]],
	  ['cath-lab',[2000199,2000153,2000052]],
	  ['cath-lab-tech',[2000010]],
	  ['cert-surg-tech',[2000011]],
	  ['certified-first-assist',[2000012]],
	  ['clinic',[2000154,2000053,2000094]],
	  ['dialysis',[2000158,2000057,2000098,]],
	  ['dialysis-tech',[2000145]],
	  ['eeg-tech',[2000017]],
	  ['ekg-tele-tech',[2000194]],
	  ['ep-tech',[2000021]],
	  ['er-trauma',[2000160,2000059,2000100]],
	  ['echo-tech',[2000016]],
	  ['endo-tech',[2000146]],
	  ['endoscopy',[2000132]],
	  ['fnp',[2000177,2000076,2000117]],
	  ['flight-nurse',[2000134]],
	  ['gastroenterology',[2000135]],
	  ['histo-tech',[2000022]],
	  ['home-health',[2000136]],
	  ['hospice',[2000161,2000060,2000101]],
	  ['icu-critical-care',[2000061,2000162,2000102]],
	  ['ir-tech',[2000023]],
	  ['lcsw',[2000024]],
	  ['ltac',[2000167,2000066,2000107]],
	  ['labor-delivery',[2000165,2000064,2000105]],
	  ['long-term-care',[2000166,2000065,2000106]],
	  ['mri-tech',[2000029,2000149]],
	  ['mammo-tech',[2000025]],
	  ['materials-mgmt-tech',[2000026]],
	  ['med-surg',[2000168,2000067,2000108]],
	  ['medical-lab-tech',[2000027]],
	  ['medical-technologist',[2000028]],
	  ['medsurg-tele',[2000138]],
	  ['mother-baby',[2000148]],
	  ['nicu',[2000171,2000070,2000111]],
	  ['neonatal',[2000169,2000068,2000109]],
	  ['neuro',[2000170,2000069,2000110]],
	  ['nuclear-medicine-tech',[2000030]],
	  ['ob-tech',[2000031]],
	  ['obgyn',[2000172,2000071,2000112]],
	  ['or',[2000175,2000074,2000115]],
	  ['or-tech',[2000033]],
	  ['occupational-therapist',[2000032]],
	  ['oncology',[2000174,2000073,2000114]],
	  ['orthopedics',[2000176,2000075,2000116]],
	  ['other',[2000177,2000076,2000117]],
	  ['pacu-pre-post-op',[2000178,2000077,2000118]],
	  ['pcu',[2000180,2000079,2000120]],
	  ['picu',[2000182,2000081,2000122]],
	  ['pediatric-er',[2000141]],
	  ['pediatrics',[2000200,2000181,2000080,2000121]],
	  ['pharmacist',[2000034]],
	  ['pharmacy-tech',[2000035]],
	  ['phlebotomist',[2000177,2000076,2000117]],
	  ['physical-therapist',[2000036]],
	  ['postpartum',[2000183,2000082,2000123]],
	  ['psych',[2000184,2000083,2000124]],
	  ['rnfa',[2000187,2000086,2000127]],
	  ['rad-tech',[2000037]],
	  ['radiology',[2000185,2000084,2000125]],
	  ['rehab',[2000186,2000085,2000126]],
	  ['respiratory-therapist',[2000040]],
	  ['snf-ltc',[2000188,2000087,2000128]],
	  ['skilled-nursing-facility',[2000150]],
	  ['speech-language-pathologist',[2000041]],
	  ['stepdown',[2000189,2000088,2000129]],
	  ['sterile-processing-tech',[2000042]],
	  ['surg-tech',[2000043]],
	  ['telemetry',[2000190,2000089,2000130]],
	  ['ultrasound-tech',[2000044]],
	  ['vascular-tech',[2000045]],
	  ['wound-care',[2000147]],
	  ['x-ray-tech',[2000193]],
	]);
    if((document.getElementById('name').value) == '' || (document.getElementById('email').value) == '' || (document.getElementById('phone').value) == ''){
      return
    }
    if (/^[-!#$%&'*+0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+0-9=?A-Z^_a-z{|}~])*@[a-zA-Z](-?[a-zA-Z0-9])*(\.[a-zA-Z](-?[a-zA-Z0-9])*)+$/.test(document.getElementById('email').value) != true || /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(document.getElementById('phone').value) != true || document.getElementById("name").value == "" || document.getElementById("lastName") == "" || document.querySelector('#licenseSelector').selectedOptions.length == 0 || document.querySelector('#specialty-dropdown').selectedOptions[0].value == ''){
      return
    }
    else{
      var checkbox = document.querySelector("#Checkbox").checked;
      name = document.querySelector('.text-field-5').value;
      phone = document.querySelector('.text-field-6').value;
      email = document.querySelector('.text-field-7').value;

      const message = document.getElementById('success-modal-message').innerHTML;
      document.getElementById('success-modal-message').innerHTML = message.replace('Clinician,',name);

      localStorage.setItem('clinician','{"firstName" : "' + (document.querySelector('.text-field-5').value) + '", "lastName" : "' + (document.querySelector('#lastName').value) + '", "phone" : "' + document.querySelector('.text-field-6').value + '", "email" : "' + document.querySelector('.text-field-7').value + '"}');
      var licenseList = [];
      for(let i=0; i<document.querySelector('#licenseSelector').selectedOptions.length;i++){licenseList.push(document.querySelector('#licenseSelector').selectedOptions[i].value)};
	    
        document.getElementById("wf-form-Candidate-Lead-Submission").style.display = 'none';
        document.querySelector('.success-message-2').style.display = "block";
	    
      var response = await postData({
        "AuthorizationKey" : "43750fe0-fce9-44d9-aa67-3ab6ade4d125",
        "Email": document.querySelector('.text-field-7').value,
        "FirstName": (JSON.parse(localStorage.getItem('clinician'))).firstName,
        "LastName": (JSON.parse(localStorage.getItem('clinician'))).lastName,
        "SpecialtyList": map2.get(document.querySelector('#specialty-dropdown').value),
        "Phone": document.querySelector('.text-field-6').value,
        "PreferredContactMethod": "text",
        "Source" : "RecInterested",
        "licenseStateList" : licenseList,
        "SMSOptIn" : checkbox
      })
        console.log(response);
	changeButton();
      }
    }
  const interestButton = document.getElementById('SubmitButton');
  const modal = document.querySelector('.modal');
  const clinician = JSON.parse(localStorage.getItem('clinician'));
  interestButton.addEventListener('click', submitForm);

  modal.addEventListener('click', function(event) {
    if(event.target.matches('.modal') && !event.target.matches('.form-block-2')){
      document.querySelector('.image-6').click();
    }
  });
	if(clinician != null){
		changeButton();
	}
}
