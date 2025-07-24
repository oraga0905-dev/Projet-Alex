// Form
$(document).ready(function () {
  var contactForm = function () {
    if ($("#contactForm").length > 0) {
      $("#contactForm").validate({
        rules: {
          name: {
            required: true,
            minlength: 5,
          },
          email: {
            required: true,
            email: true,
          },
          phone: {
            required: true,
            digits: true,
            minlength: 8,
          },
          message: {
            required: true,
            minlength: 5,
          },
        },
        messages: {
          name: {
            required: "Please enter your name",
            minlength: "Name must be at least 5 characters long",
          },
          email: "Please enter a valid email address",
          phone: {
            required: "Please enter your phone number",
            digits: "Only digits are allowed",
            minlength: "Phone number must be at least 8 digits",
          },
          message: "Please enter a message (minimum 5 characters)",
        },

        submitHandler: function (form) {
          var email = $("input[name='email']").val();
          var name = $("input[name='name']").val();
          var phone = $("input[name='phone']").val();

          var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          var namePattern = /^[A-Za-zÀ-ÿ\s'-]{5,}$/;
          var phonePattern = /^[0-9]{8,}$/;

          var validator = $("#contactForm").validate();

          // Vérification du nom
          if (!namePattern.test(name)) {
            validator.showErrors({
              name: "Name must contain only letters, spaces, apostrophes, or hyphens (no digits or symbols), and be at least 5 characters long.",
            });
            return false;
          }

          // Vérification de l'email
          if (!emailPattern.test(email)) {
            validator.showErrors({
              email: "Email format is invalid.",
            });
            return false;
          }

          // Vérification du téléphone
          document
            .getElementById("contactForm")
            .addEventListener("submit", function (e) {
              const countryCode = document
                .getElementById("country_code")
                .value.trim();
              const phone = document.getElementById("phone").value.trim();

              const phoneRegex = /^\d{6,14}$/; // 6 à 14 chiffres, sans espace ni signe

              let errors = [];

              if (!countryCode) {
                errors.push("Veuillez sélectionner un indicatif de pays.");
              }

              if (!phoneRegex.test(phone)) {
                errors.push(
                  "Le numéro de téléphone doit contenir entre 6 et 14 chiffres (sans espaces ni caractères spéciaux)."
                );
              }

              if (errors.length > 0) {
                e.preventDefault();
                alert(errors.join("\n"));
              }
            });

          // ✅ Tous les champs sont valides
          form.submit();
        },
      });
    }
  };

  contactForm();
});
