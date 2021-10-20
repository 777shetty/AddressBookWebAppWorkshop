const save = (event) => {
    event.preventDefault();
    event.stopPropagation();
    let contactData = createContact();
    let jsonObject = JSON.stringify(contactData);
    createAndUpdateStorage(contactData);
}

const createContact = () => {
    let contactData = new Contact();
    let names = getInputValueById('#name').split(" ");
    contactData.firstName = names[0];
    contactData.lastName = names[1];
    contactData.address = getInputValueById('#address');
    contactData.city = getInputValueById('#city');
    contactData.state = getInputValueById('#state');
    contactData.zip = getInputValueById('#zip');
    contactData.phone = getInputValueById('#phone');
    contactData.email = getInputValueById('#email');
    return contactData;
}
const resetForm = () => {
    setValue('#name','');
    setValue('#address','');
    setValue('#zip','');
    setValue('#phone','');
    setValue('#email','');
   
    setErrorText(".name-text-error", "");
    setErrorText(".date-text-error", "");
    
  }

  const unsetSelectedValues = (propertyValue) => {
    let allItems = document.querySelectorAll(propertyValue);
    allItems.forEach(item => {
      item.checked = false;
    });
  }

  const setTextValue = (query, value) =>{
    const element = document.querySelector(query);
    element.textContent = value;
  }

  const setValue = (query, value) => {
    const element = document.querySelector(query);
    element.value = value;
  } 


const getInputValueById = (id) => {
    let value = document.querySelector(id).value;
    return value;
}

function createAndUpdateStorage(contactData) {
    let contactList = JSON.parse(localStorage.getItem("ContactList"));

    if (contactList != undefined) {
        contactList.push(contactData);
    }
    else {
        contactList = [contactData];
    }
    alert(contactList.toString());
    localStorage.setItem("ContactList", JSON.stringify(contactList));
} 