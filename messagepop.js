$(document).ready(function () {
    $.CreditSense.Popup({
      elementSelector: "#cs-link",
      client: "BEEL001",
      params: {
        appRef: "", // Default not provided = Ask.
        centerlink: true, // DEFAULT = TRUE
        debugBanks: true,
        bankOverwrite: "", // Bank ID, not provided = ask.
        alreadyAgreedTerms: false, // Default = False = Ask.
        waitCompletion: true, // Default = true, pop-up closes only on success. VS using polling to tell.
      debug: true
      },
    
      callback: function (response) {
        switch (response) {
          case "99": // Success Bank details retrieved successfully.
            $('#applysection').hide();
            $('#success').show();
            break;
          case "0": // Initialised
            //$('#cs-result').html('<span>Initialised</span>');
            break;
          case "1": // Application has opened in pop-up window.
            //$('#cs-result').html('<span>In Progress</span>');
            break;
          case "-1": // Application window has closed before completing.
            $('#pageclose').show();
            break;
          case "-2": // Bank failure - Unable to log in.

            break;
          case "-3": // Bank failure - Unable to log in. -- too many times (2)
            $('#applysection').hide();
            $('#failure').show();
            break;
          case "-4": // Bank Missing - Manual Upload Only.
            // $('#cs-result').html('<span>Manual Bank Upload - Unable to use CreditSense.</span>');
            break;
          // Case 5 password failure.

          case "-99": // Unable to reach CreditSense
            //$('#cs-result').html('<span>Unable to reach CreditSense services - fall-back method.</span>');
            break;
        }
      }
    });
  });