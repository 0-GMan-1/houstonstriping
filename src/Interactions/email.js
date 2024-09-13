import emailjs from 'emailjs-com';

function sendEmail(type, nameVal, lastNameVal, phone, windows, feet, driveway, bulbs, notes, e) {
    e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it
    let script = ''
    
    if (type === 'windows') {
        script = `QUOTE REQUEST ---- ${nameVal} ${lastNameVal} has requested a quote today for ${type}
        They have ${windows} windows and have a few notes ${notes}
        Contact them at ${phone}
        `
    } else if (type === 'lights') {
        script = `QUOTE REQUEST ---- ${nameVal} ${lastNameVal} has requested a quote today for ${type}
        They have ${feet} estimated feet. For the bulbs they wanted ${bulbs}
        They have a few notes ${notes}
        Contact them at ${phone}
        `
    } else if (type === 'powerwashing') {
        script = `QUOTE REQUEST ---- ${nameVal} ${lastNameVal} has requested a quote today for ${type}
        They have ${feet} estimated feet and they answered ${driveway} for if they want their driveway done
        They have a few notes ${notes}
        Contact them at ${phone}
        `
    } else if (type === 'gutters') {
        script = `QUOTE REQUEST ---- ${nameVal} ${lastNameVal} has requested a quote today for ${type}
        They have ${feet} estimated feet and have a few notes ${notes}
        Contact them at ${phone}
        `
    } else if (type === 'snow') {
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
      
    
  }

  export default sendEmail;