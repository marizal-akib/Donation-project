const getDonation = () =>{
    const storedDonation = localStorage.getItem('donate-fund');

    if(storedDonation){
        return JSON.parse(storedDonation)
    }
    return [];
}

const saveDonation = id =>{
    const storedDonation = getDonation();
    const exist = storedDonation.find(donationId => donationId === id)

    if(!exist){
        storedDonation.push(id);
        localStorage.setItem('donate-fund',JSON.stringify(storedDonation))
    }
}

export {getDonation , saveDonation}