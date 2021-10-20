class Contact{

    get id()
    {
        return this._id;
    }

    set id(id)
    {
        this._id = id;
    }

    get firstName()
    {
        return this._firstName;
    }

    set firstName(firstName)
    {
        let firstNameRegex = RegExp('^[A-Z][a-z]{2,}$')
        if(firstNameRegex.test(firstName))
        this._firstName = firstName;
        else
        throw 'First Name is Invalid'
    }

    get address()
    {
        return this._address;
    }

    set address(address)
    {
        let words = address.split(" ");
        if(words.length>1){
            let addressRegex = RegExp('^[A-Za-z,-/.0-9]{3,}$');
            for(const word of words){
                if(!addressRegex.test(word))
                throw 'Address Invalid';
            }
            this._address = address;
        }
        else{
            throw 'Address is Invalid';
        }
    }

    get city()
    {
        return this._city;
    }

    set city(city)
    {
        let cityRegex = RegExp('^[A-Za-z]{3,}$')
        if(cityRegex.test(city))
        this._city = city;
        else
        throw 'City is Invalid'
    }

    get state()
    {
        return this._state;
    }

    set state(state)
    {
        let stateRegex = RegExp('^[A-Za-z]{3,}$')
        if(stateRegex.test(state))
        this._state = state;
        else
        throw 'State is Invalid'
    }

    get zip()
    {
        return this._zip;
    }

    set zip(zip)
    {
        let zipRegex = RegExp('^[0-9]{3}[ ]?[0-9]{3,}$');
        if(zipRegex.test(zip))
        this._zip = zip;
        else
        throw 'ZipCode is Invalid'
    }

    get phone()
    {
        return this._phone;
    }

    set phone(phone)
    {
        let phoneRegex = RegExp('^\\+(?:[0-9] ?){0,11}[0-9]$');
        if(phoneRegex.test(phone))
        this._phone = phone;
        else
        throw 'Phone Number is Invalid'
    }


    toString()
    {
        return "Id = "+this.id+", FirstName = "+this.firstName+", Address = "+this.address+
                ", City = "+this.city+", State = "+this.state+", Zip = "+this.zip+", Phone = "+this.phone;
    }

}