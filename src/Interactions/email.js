import emailjs from 'emailjs-com';

export const sendEmail = (type, nameVal, lastNameVal, phone, windows, feet, driveway, bulbs, notes, dispatch, e) => {
    e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it
    let script = ''
    
    if (type === 'striping') {
        script = `QUOTE REQUEST ---- ${nameVal} ${lastNameVal} has requested a quote today for ${type}
        They have ${windows} lines and have a few notes ${notes}
        Contact them at ${phone}
        `
    } 
    else if (type === 'pressurewashing') {
        script = `QUOTE REQUEST ---- ${nameVal} ${lastNameVal} has requested a quote today for ${type}
        They have ${feet} estimated feet and they answered ${driveway} for the specified areas
        They have a few notes ${notes}
        Contact them at ${phone}
        `
    }  
    else if (type === 'asphault/sealcoat') {
        script = `QUOTE REQUEST ---- ${nameVal} ${lastNameVal} has requested a quote today for ${type}
        They have ${feet} estimated feet and have a few notes ${notes}
        Contact them at ${phone}
        `
    }

    const templateParams = {message: script}

    emailjs.send('service_tdw3mdo', 'template_gbkupls', templateParams, 'CLFyhblTydCimBI3u').then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
        },
        (error) => {
          console.log('FAILED...', error);
        },
      );

    dispatch({ type: 'QUOTE_COMPLETED' })
      
    
  }

  export default sendEmail;