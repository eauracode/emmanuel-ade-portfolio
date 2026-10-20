export const site = {
  name: "Emmanuel Ade",
  email: "emmanuelaadee@gmail.com",
  whatsappNumber: "2349035168995", // TODO: confirm this is the real WhatsApp number
  linkedin: "https://www.linkedin.com/in/emmanueladee/",
  whatsappLink: (message: string) =>
    `https://wa.me/2349035168995?text=${encodeURIComponent(message)}`,
};
