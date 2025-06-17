<script type="text/javascript">
  window.addEventListener("message", function(event) {
    if (event.data.type === 'hsFormCallback' && event.data.eventName === 'onFormSubmit') {
      
      // Controleer of er data beschikbaar is
      var formData = event.data.data || {};
      
      // Haal e-mail, voornaam en achternaam op (met fallback als ze niet bestaan)
      var userEmail = formData.email || formData.Email || formData.e_mail || "Onbekend";
      var firstName = formData.firstname || formData.firstName || formData.FirstName || "Onbekend";
      var lastName = formData.lastname || formData.lastName || formData.LastName || "Onbekend";

      // Voeg de extra data toe aan de dataLayer push
      window.dataLayer.push({
        'event': 'hubspot-form-success',
        'hs-id': event.data.id,
        'hs-data': formData,
        'user-email': userEmail,
        'user-firstname': firstName,
        'user-lastname': lastName
      });

      console.log("Formulier verzonden! Data:", formData);
    }
  });
</script>
