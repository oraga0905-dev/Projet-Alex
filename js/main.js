// Form
$(document).ready(function () {
  var contactForm = function () {
    if ($("#contactForm").length > 0) {
      $("#contactForm").validate({
        rules: {
          name: {
            required: true,
            minlength: 5,
            pattern: /^[A-Za-zÀ-ÿ\s'-]+$/,
          },
          email: {
            required: true,
            email: true,
          },
          phone: {
            required: true,
            digits: true,
            minlength: 6,
            maxlength: 14,
          },
          message: {
            required: true,
            minlength: 5,
          },
        },
        messages: {
          name: {
            required: "Veuillez entrer votre nom",
            minlength: "Le nom doit comporter au moins 5 caractères",
            pattern:
              "Le nom ne peut contenir que des lettres, espaces, apostrophes ou tirets",
          },
          email: "Veuillez entrer une adresse email valide",
          phone: {
            required: "Veuillez entrer votre numéro de téléphone",
            digits: "Le numéro doit contenir uniquement des chiffres",
            minlength: "Le numéro doit contenir au moins 6 chiffres",
            maxlength: "Le numéro ne peut dépasser 14 chiffres",
          },
          message: "Veuillez entrer un message (au moins 5 caractères)",
        },

        submitHandler: function (form) {
          var email = $("input[name='email']").val().trim();
          var name = $("input[name='name']").val().trim();
          var phone = $("input[name='phone']").val().trim();
          var message = $("textarea[name='message']").val().trim();

          var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          var namePattern = /^[A-Za-zÀ-ÿ\s'-]{5,}$/;
          var phonePattern = /^\d{6,14}$/;

          var validator = $("#contactForm").validate();

          if (!namePattern.test(name)) {
            validator.showErrors({
              name: "Le nom doit contenir uniquement des lettres, espaces, apostrophes ou tirets, et au moins 5 caractères.",
            });
            return false;
          }

          if (!emailPattern.test(email)) {
            validator.showErrors({
              email: "Le format de l'email est invalide.",
            });
            return false;
          }

          if (!phonePattern.test(phone)) {
            validator.showErrors({
              phone:
                "Le numéro de téléphone doit contenir entre 6 et 14 chiffres (sans espaces ni caractères spéciaux).",
            });
            return false;
          }

          if (message.length < 5) {
            validator.showErrors({
              message: "Le message doit contenir au moins 5 caractères.",
            });
            return false;
          }

          // Tout est valide, on soumet le formulaire
          form.submit();
        },
      });
    }
  };

  contactForm();
});
