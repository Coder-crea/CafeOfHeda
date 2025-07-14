import React, { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormError(null);

    const message = `
📞 Новое сообщение с сайта:
Имя: ${formData.name}
Email: ${formData.email}
Телефон: ${formData.phone || "Не указан"}
Сообщение:
${formData.message}
`;

    try {
      const response = await fetch(
        `https://api.telegram.org/bot7980825984:AAEj2E7Y2qbRy3pUAgJGCRKyUYkOlvkwLfA/sendMessage?chat_id=6951225935&text=${encodeURIComponent(
          message
        )}`
      );

      if (!response.ok) {
        throw new Error("Ошибка отправки");
      }

      alert("Сообщение успешно отправлено!");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Ошибка:", error);
      setFormError("Произошла ошибка при отправке сообщения.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-form">
      <h2>Обратная связь</h2>
      <p>Оставьте ваше сообщение, и мы свяжемся с вами в ближайшее время.</p>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Имя:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Телефон:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+7 (900) 000-00-00"
            pattern="^\+?[0-9\s\-\(\)]{7,}$"
            title="Введите корректный номер телефона"
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Сообщение:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        {formError && <p className="error">{formError}</p>}

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Отправка..." : "Отправить"}
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
