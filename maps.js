function xd(v){console.log(v); process.exit();}

const ProfileName = 'ProfileName'
const ShippingAsBilling = 'ShippingAsBilling'
const FirstNameBilling = 'FirstNameBilling'
const LastNameBilling = 'LastNameBilling'
const Address1Billing = 'address1Billing'
const Address2Billing = 'address2Billing'
const Address3Billing = 'address3Billing'
const CityBilling = 'cityBilling'
const StateBilling = 'stateBilling'
const ZipCodeBilling = 'zipCodeBilling'
const CountryBilling = 'countryBilling'
const PhoneBilling = 'phoneBilling'
const HouseNbBilling = 'houseNbBilling'
const FirstNameShipping = 'FirstNameShipping'
const LastNameShipping = 'LastNameShipping'
const Address1Shipping = 'address1Shipping'
const Address2Shipping = 'address2Shipping'
const Address3Shipping = 'address3Shipping'
const CityShipping = 'cityShipping'
const StateShipping = 'stateShipping'
const ZipCodeShipping = 'zipCodeShipping'
const CountryShipping = 'countryShipping'
const PhoneShipping = 'phoneShipping'
const HouseNbShipping = 'houseNbShipping'
const FriendlyName = 'friendlyName'
const NameOnCard = 'NameOnCard'
const DOB = 'DOB'
const CardType = 'cardType'
const CardNumber = 'CardNumber'
const CardExpirationMonth = 'CardExpirationMonth'
const CardExpirationYear = 'CardExpirationYear'
const CardSecurityCode = 'CardSecurityCode'
const CardFirstName = 'CardFirstName'
const CardLastName = 'CardLastName'
const Email = 'Email'
const PaypalEmail = 'paypalEmail'
const PaypalPassword = 'paypalPassword'
const CheckoutDelaySeconds = 'CheckoutDelaySeconds'
const CheckoutOncePerWebsite = 'CheckoutOncePerWebsite'
const BillingAltFirstName = 'BillingAltFirstName'
const BillingAltLastName = 'BillingAltLastName'
const BillingStateJP = 'BillingStateJP'
const ShippingAltFirstName = 'ShippingAltFirstName'
const ShippingAltLastName = 'ShippingAltLastName'
const ShippingStateJP = 'ShippingStateJP'
const ShippingMethod = 'ShippingMethod'
const MaxCheckouts = 'MaxCheckouts'

function simpleRemapInto(row, map) {
	var result = [];
	Object.keys(map).map(function(internalField){
		if(map[internalField])
			result[map[internalField]] = row.hasOwnProperty(internalField) ? row[internalField] : '';
	});

	return result;
}

function simpleRemapFrom(row, map) {
	var result = [];
	Object.keys(map).map(function(internalField){
		if(map[internalField])
			result[internalField] = row.hasOwnProperty(map[internalField]) ? row[map[internalField]] : '';
	});
	return result;
}

module.exports = {
	'aiomoji' : {
		map: { 
		  'Profile Name':ProfileName,
		  'Email Address':Email, // or paypal email
		  'Shipping First Name':FirstNameShipping,
		  'Shipping Last Name':LastNameShipping,
		  'Shipping Country':CountryShipping,
		  'Shipping State':StateShipping,
		  'Shipping Address':Address1Shipping,
		  'Shipping Address Two':Address2Shipping,
		  'Shipping City':CityShipping,
		  'Shipping Postal': ZipCodeShipping,
		  'Shipping Phone': PhoneShipping,
		  'Same Billing':ShippingAsBilling,
		  'Billing First Name':FirstNameBilling,
		  'Billing Last Name':LastNameBilling,
		  'Billing Country':CountryBilling,
		  'Billing State':StateBilling,
		  'Billing Address':Address1Billing,
		  'Billing Address Two':Address2Billing,
		  'Billing City':CityBilling,
		  'Billing Postal':ZipCodeBilling,
		  'Billing Phone':PhoneBilling,
		  'Card Number':CardNumber,
		  'Card CVV':CardSecurityCode,
		  'Expire Month':CardExpirationMonth,
		  'Expire Year':CardExpirationYear,
		  'Card Type':CardType,
		},
		intoDefault: simpleRemapInto,
		fromDefault: simpleRemapFrom,
	},
	'anbaio' : {
		map:  { 
			ShippingAsBilling : ShippingAsBilling,
		    FirstNameBilling : FirstNameBilling,
		    LastNameBilling : LastNameBilling,
		    address1Billing : Address1Billing,
		    address2Billing : Address2Billing,
		    cityBilling : CityBilling,
		    stateBilling : StateBilling,
		    zipCodeBilling : ZipCodeBilling,
		    countryBilling : CountryBilling,
		    phoneBilling : PhoneBilling,
		    houseNbBilling : HouseNbBilling,
		    FirstNameShipping : FirstNameShipping,
		    LastNameShipping : LastNameShipping,
		    address1Shipping : Address1Shipping,
		    address2Shipping : Address2Shipping,
		    cityShipping : CityShipping,
		    stateShipping : StateShipping,
		    zipCodeShipping : ZipCodeShipping,
		    countryShipping : CountryShipping,
		    phoneShipping : PhoneShipping,
		    houseNbShipping : HouseNbShipping,
		    friendlyName : FriendlyName,
		    NameOnCard : NameOnCard,
		    DOB : DOB,
		    cardType : CardType,
		    CardNumber : CardNumber,
		    CardExpirationMonth : CardExpirationMonth,
		    CardExpirationYear : CardExpirationYear,
		    CardSecurityCode : CardSecurityCode,
		    billingEmail : Email,
		    paypalEmail : PaypalEmail,
		    paypalPassword : PaypalPassword,
		    CheckoutDelaySeconds : CheckoutDelaySeconds,
		    CheckoutOncePerWebsite : CheckoutOncePerWebsite,
		},
		intoDefault: simpleRemapInto,
		fromDefault: simpleRemapFrom,
	},
	'balko' : {
		map: {
		    "id": '',
		    "firstname":FirstNameShipping,
		    "lastname":LastNameShipping,
		    "email":Email,
		    "phone":PhoneBilling,
		    "add1":Address1Shipping,
		    "add2":Address2Shipping,
		    "state":StateShipping,
		    "zip":ZipCodeShipping,
		    "country":CountryShipping,
		    "city":CityShipping,
		    "ccfirst":CardFirstName,
		    "cclast":CardLastName,
		    "cc":CardNumber,
		    "expm":CardExpirationMonth,
		    "expy":CardExpirationYear,
		    "ccv":CardSecurityCode,
		    "oneCheckout": '', // WHATIS
		    "bfirstname":FirstNameBilling,
		    "blastname":LastNameBilling,
		    "badd1":Address1Billing,
		    "badd2":Address2Billing,
		    "bstate":StateBilling,
		    "bzip":ZipCodeBilling,
		    "bcountry":CountryBilling,
		    "bcity":CityBilling
		},
		intoDefault: simpleRemapInto,
		fromDefault: simpleRemapFrom,
	},
	'bnb' : {
		map: {
			Name : FriendlyName,
			BillingFirstName : FirstNameBilling,
			BillingAltFirstName : BillingAltFirstName,
			BillingLastName : LastNameBilling,
			BillingAltLastName : BillingAltLastName,
			BillingAddress1 : Address1Billing,
			BillingAddress2 : Address2Billing,
			BillingAddress3 : Address3Billing,
			BillingZipCode : ZipCodeBilling,
			BillingPhone : PhoneBilling,
			BillingCity : CityBilling,
			BillingState : StateBilling,
			BillingStateJP : BillingStateJP,
			ShippingFirstName : FirstNameShipping,
			ShippingAltFirstName : ShippingAltFirstName,
			ShippingLastName : LastNameShipping,
			ShippingAltLastName : ShippingAltLastName,
			ShippingAddress1 : Address1Shipping,
			ShippingAddress2 : Address2Shipping,
			ShippingAddress3 : Address3Shipping,
			ShippingZipCode : ZipCodeShipping,
			ShippingPhone : PhoneShipping,
			ShippingCity : CityShipping,
			ShippingState : StateShipping,
			ShippingStateJP : ShippingStateJP,
			ShippingMethod : ShippingMethod,
			CreditCardType : CardType,
			CreditCardNumber : CardNumber,
			CreditCardExpiryMonth : CardExpirationMonth,
			CreditCardExpiryYear : CardExpirationYear,
			CreditCardCvv : CardSecurityCode,
			ShippingAddressSame : ShippingAsBilling,
			MaxCheckouts : MaxCheckouts			
		},
		intoDefault: simpleRemapInto,
		fromDefault: (row, map) => {
			row.sizes = ['Random'];
			simpleRemapFrom(row,map);
		}
	},
	'candypreme' : {
		map: {
		    "addressLine1":Address1Shipping,
		    "addressLine2":Address2Shipping,
		    "billingCVV":CardSecurityCode,
		    "billingCardNumber":CardNumber,
		    "billingCardType":CardType,
		    "billingExpMonth":CardExpirationMonth,
		    "billingExpYear":CardExpirationYear,
		    "billingName":NameOnCard,
		    "city":CityShipping,
		    "country":CountryShipping,
		    "email":Email,
		    "fullName":FriendlyName,
		    "phoneNumber":PhoneShipping,
		    "state":StateShipping,
		    "zipCode":ZipCodeShipping,			
		},
		intoDefault: simpleRemapInto,
		fromDefault: simpleRemapFrom,
	},
	'cinnasole' : {
		map: {
			"profile_name":ProfileName,
			"profile[flName]": FriendlyName,
			"profile[email]":Email,
			"profile[phone]":PhoneShipping,
			"profile[address1]":Address1Shipping,
			"profile[address2]":Address2Shipping,
			"profile[zipCode]":ZipCodeShipping,
			"profile[city]":CityShipping,
			"profile[state]":StateShipping,
			"profile[country]":CountryShipping,
			"card[number]":CardNumber,
			"card[month]":CardExpirationMonth,
			"card[year]":CardExpirationYear,
			"card[cvv]":CardSecurityCode,
			"card[type]":CardType,
		},
		unpack: data => data.profiles,
		pack: data => {return {
			  "settings": {
			    "webhook": "",
			    "twocap": ""
			  },
			  "profiles": data
			}
		},
		intoDefault: simpleRemapInto,
		fromDefault: simpleRemapFrom,
	},
	'cyber' : {
		intoDefault: simpleRemapInto,
		fromDefault: simpleRemapFrom,
	},
	'dashev3' : {
	},
	'eveaio' : {
		map: {
			ProfileName:ProfileName,
			BillingFirstName:FirstNameBilling,
			BillingLastName:LastNameBilling,
			BillingAddressLine1:Address1Billing,
			BillingAddressLine2:Address2Billing,
			BillingCity:CityBilling,
			BillingState:StateBilling,
			BillingCountryCode:CountryBilling,
			BillingZip:ZipCodeBilling,
			BillingPhone:PhoneBilling,
			BillingEmail:Email,
			ShippingFirstName:FirstNameShipping,
			ShippingLastName:LastNameShipping,
			ShippingAddressLine1:Address1Shipping,
			ShippingAddressLine2:Address2Shipping,
			ShippingCity:CityShipping,
			ShippingState:StateShipping,
			ShippingCountryCode:CountryShipping,
			ShippingZip:ZipCodeShipping,
			ShippingPhone:PhoneShipping,
			ShippingEmail:Email,
			NameOnCard:NameOnCard,
			CreditCardNumber:CardNumber,
			ExpirationMonth:CardExpirationMonth,
			ExpirationYear:CardExpirationYear,
			Cvv:CardSecurityCode,
			CardType:CardType,
			OneCheckoutPerWebsite:'',
			SameBillingShipping:ShippingAsBilling,
			BirthDay:'',
			BirthMonth:'',
			BirthYear:''			
		},
		unpack: data => data.ArrayOfProfile.Profile,
		pack: data => {return { 
				ArrayOfProfile: { 
					Profile:  data 
				}
			}
		},
		intoDefault: simpleRemapInto,
		fromDefault: simpleRemapFrom,
	},
	'hastey' : {
		map: {
		    "__profile__name":ProfileName,
		    "address":Address1Shipping,
		    "address_2":Address2Shipping,
		    "cardType":CardType,
		    "cc_cvv":CardSecurityCode,
		    "cc_month":CardExpirationMonth,
		    "cc_year":CardExpirationYear,
		    "cc_number":CardNumber,
		    "city":CityShipping,
		    "country":CountryShipping,
		    "email":Email,
		    "id":'',
		    "name":FriendlyName,
		    "state":StateShipping,
		    "tel":PhoneShipping,
		    "zip":ZipCodeShipping,
		},
		intoDefault: simpleRemapInto,
		fromDefault: simpleRemapFrom,
	},
	'kodai' : {
	},
	'oculus' : {
	},
	'pd' : {
	},
	'phantom' : {
	},
	'prism' : {
	},
	'profiles' : {
		map: {
		  "country":CountryShipping,
		  "profileNickname":ProfileName,
		  "city":CityShipping,
		  "cardType":CardType,
		  "fullName":FriendlyName,
		  "adr1":Address1Shipping,
		  "adr2":Address2Shipping,
		  "adr3":Address3Shipping,
		  "cardNo":CardNumber,
		  "cvc":CardSecurityCode,
		  "expMo":CardExpirationMonth,
		  "expYr":CardExpirationYear,
		  "phone":PhoneShipping,
		  "postCode":ZipCodeShipping,
		  "state":StateShipping,
		  "email":Email,
		  "singleBilling":ShippingAsBilling,			
		},
		intoDefault: simpleRemapInto,
		fromDefault: simpleRemapFrom,
	},
	'sneaker_copter' : {
	},
	'sole_terminator' : {
		map: {
	    	"profilename": ProfileName,
		    "firstname": FirstNameShipping,
		    "lastname": LastNameShipping,
		    "address1":Address1Shipping,
		    "address2":Address2Shipping,
		    "country":CountryShipping,
		    "countrycode":ZipCodeShipping,
		    "state":StateShipping,
		    "statecode":StateShipping,
		    "city":CityShipping,
		    "zip":ZipCodeShipping,
		    "phone":PhoneShipping,
		    "cardholder":NameOnCard,
		    "cardnumber":CardNumber,
		    "cvv":CardSecurityCode,
		    "email":Email,
		    "month":CardExpirationMonth,
		    "year":CardExpirationYear,
		    "billingfirstname":FirstNameBilling,
		    "billinglastname":LastNameBilling,
		    "billingaddress1":Address1Billing,
		    "billingaddress2":Address2Billing,
		    "billingcountry":CountryBilling,
		    "billingcountrycode":CountryBilling,
		    "billingstate":StateBilling,
		    "billingstatecode":ZipCodeBilling,
		    "billingcity":CityBilling,
		    "billingzip":ZipCodeBilling,
		    "billingphone":PhoneBilling,
		    "differentbilling":ShippingAsBilling,
		},
		intoDefault: simpleRemapInto,
		fromDefault: simpleRemapFrom,
	},
	'soleaio' : {
		map: {
		    "ID":'',
		    "ProfileName":ProfileName,
		    "Email":Email,
		    "Phone":PhoneShipping,
		    "ShippingFirstName":FirstNameShipping,
		    "ShippingLastName":LastNameShipping,
		    "ShippingAddress1":Address1Shipping,
		    "ShippingAddress2":Address2Shipping,
		    "ShippingCity":CityShipping,
		    "ShippingZip":ZipCodeShipping,
		    "ShippingCountry":CountryShipping,
		    "ShippingState":StateShipping,
		    "UseBilling":ShippingAsBilling,
		    "BillingFirstName":FirstNameBilling,
		    "BillingLastName":LastNameBilling,
		    "BillingAddress1":Address1Billing,
		    "BillingAddress2":Address2Billing,
		    "BillingCity":CityBilling,
		    "BillingZip":ZipCodeBilling,
		    "BillingCountry":CountryBilling,
		    "BillingState":StateBilling,
		    "CardNumber":CardNumber,
		    "CardName":NameOnCard,
		    "CardCvv":CardSecurityCode,
		    "CardExpiryMonth":CardExpirationMonth,
		    "CardExpiryYear":CardExpirationYear,
		    "CardType":CardType,	
		},
		intoDefault: simpleRemapInto,
		fromDefault: simpleRemapFrom,
	},
	'whatbot' : {
	},
	'yitan' : {
	},
	'NSB' : {
	},
	'TKS' : {
	}
}






