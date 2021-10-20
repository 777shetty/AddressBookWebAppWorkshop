let addressBookContactJSONObject = {};
let isUpdate = false;
const save = (event) => {
  try {
      setAddressBookContactJSONObject();
      UpdateLocalStorage();
      open("../Pages/AddFormHome.html")
  } catch (submitError) {
      alert(submitError);
      return;
  }
};


const UpdateLocalStorage = () => {
  let addressBookList = JSON.parse(localStorage.getItem("AddressBookList"));
  if (addressBookList) {
      let contactData = addressBookList.find(contact => contact._id == addressBookContactJSONObject._id);
      if (!contactData) {
          addressBookList.push(createAddressBookContactData());
      } else {
          const index = addressBookList.map(contact => contact._id).indexOf(contactData._id);
          addressBookList.splice(index, 1, createAddressBookContactData(contactData._id));
      }
  } else {
      addressBookList = [createAddressBookContactData()];
  }
  alert("Local Storage Updated Successfully!\nTotal Contacts : " + addressBookList.length);
  localStorage.setItem("AddressBookList", JSON.stringify(addressBookList));
}

const setAddressBookContactJSONObject = () => {
  addressBookContactJSONObject._name = getValue('#name');
  addressBookContactJSONObject._address = getValue('#address');
  addressBookContactJSONObject._phone = getValue('#phone');
  addressBookContactJSONObject._city = getValue('#city');
  addressBookContactJSONObject._state = getValue('#state');
  addressBookContactJSONObject._zip = getValue('#zip');
};
const setForm = () => {
  setValue("#name", addressBookContactJSONObject._name);
  setValue("#phoneNumber", addressBookContactJSONObject._phoneNumber);
  setValue("#address", addressBookContactJSONObject._address);
  setValue("#city", addressBookContactJSONObject._city);
  setValue("#state", addressBookContactJSONObject._state);
  setValue("#zip", addressBookContactJSONObject._zip);
};
const checkForUpdate = () => {
  const personToEditJson = localStorage.getItem("PersonToEdit");
  isUpdate = personToEditJson ? true : false;
  if (!isUpdate) return;
  addressBookContactJSONObject = JSON.parse(personToEditJson);
  setForm();
};

const setSelectedValues = (propertyValue, value) => {
  let allItems = document.querySelectorAll(propertyValue);
  allItems.forEach(item => {
      if (Array.isArray(value)) {
          if (value.includes(item.value)) {
              item.setItem = value;
          }
      } else if (item.value === value)
          item.setItem = value;
  });

}


const createAddressBookContactData = (id) => {
  let contactData = new Contact();
  if (!id) contactData.id = createNewContactId();
  else contactData.id = id;
  setAddressBookContactClassObject(contactData);
  return contactData;
}

const setAddressBookContactClassObject = (contactData) => {
  try {
      contactData.name = addressBookContactJSONObject._name;
  } catch (error) {
      setTextValue(".name-error", error);
      throw error;
  }
  try {
      contactData.address = addressBookContactJSONObject._address;
  } catch (error) {
      setTextValue(".address-error", error);
      throw error;
  }
  try {
      contactData.phone = addressBookContactJSONObject._phone;
  } catch (error) {
      setTextValue(".tel-error", error);
      throw error;
  }
  contactData.city = addressBookContactJSONObject._city;
  contactData.state = addressBookContactJSONObject._state;
  contactData.zip = addressBookContactJSONObject._zip;
  alert("Added contact   :\n" + contactData.toString());
};

const createNewContactId = () => {
  let contactId = localStorage.getItem("ContactID");
  contactId = !contactId ? 1 : (parseInt(contactId) + 1).toString();
  localStorage.setItem("ContactID", contactId);
  return contactId;
}

const getValue = (propertyId) => {
  let value = document.querySelector(propertyId).value;
  return value;
};

const setTextValue = (id, value) => {
  const element = document.querySelector(id);
  element.textContent = value;
};
const resetForm = () => {
  setValue('#name','');
  setValue('#address','');
  setSelectedIndex('#city',0);
  setSelectedIndex('#state',0);
  setValue('#zip','');
  setValue('#phone','');
  let listOfErrors = ['.name-error','.address-error','.phone-error','.zip-error'];
  listOfErrors.forEach(errorElement => {
    setErrorText(errorElement,"");
  });
}

const setValue = (id,value) => {
const element = document.querySelector(id);
element.value = value;
}

const setSelectedIndex = (id,index) => {
const element = document.querySelector(id);
element.selectedIndex = index;
}