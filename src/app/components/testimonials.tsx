import Image from "next/image";
import { Card, CardContent } from "./ui/card";

const testimonials = [
  {
    name: "Leslie Alexander",
    child: "Isak Alexander's",
    image: "https://xsgames.co/randomusers/assets/avatars/female/23.jpg",
    text: "Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.",
  },
  {
    name: "Michael Foster",
    child: "Tesla Foster's",
    image: "https://xsgames.co/randomusers/assets/avatars/female/64.jpg",
    text: "Quia dolorem qui et. Atque quo aliquid sit eos officia. Dolores similique laboriosam quaerat cupiditate.",
  },
  {
    name: "Dries Vincent",
    child: "Emily Vincent's",
    image: "https://xsgames.co/randomusers/assets/avatars/female/8.jpg",
    text: "Consequatur ut atque. Itaque nostrum molestiae id veniam eos cumque. Ut quia eum fugit laborum autem inventore ut voluptate.",
  },
  {
    name: "Leslie Alexander",
    child: "Isak Alexander's",
    image: "https://xsgames.co/randomusers/assets/avatars/male/38.jpg",
    text: "Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.",
  },
  {
    name: "Michael Foster",
    child: "Tesla Foster's",
    image: "https://xsgames.co/randomusers/assets/avatars/male/76.jpg",
    text: "Quia dolorem qui et. Atque quo aliquid sit eos officia. Dolores similique laboriosam quaerat cupiditate.",
  },
  {
    name: "Dries Vincent",
    child: "Emily Vincent's",
    image: "https://xsgames.co/randomusers/assets/avatars/male/74.jpg",
    text: "Consequatur ut atque. Itaque nostrum molestiae id veniam eos cumque. Ut quia eum fugit laborum autem inventore ut voluptate.",
  },
  {
    name: "Leslie Alexander",
    child: "Isak Alexander's",
    image: "https://xsgames.co/randomusers/assets/avatars/male/51.jpg",
    text: "Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.",
  },
];

export const Testimonials = () => {
  return (
    <section className="px-4 xl:px-0">
      <h2 className="text-4xl font-display font-bold text-center mb-12">
        Inspiring Stories from Our Students
      </h2>
      <div className="bg-gradient-to-r from-white to-white bg-cover bg-no-repeat">
        <div className=" bg-white/40 backdrop-blur-xl">
          <div className="container mx-auto grid md:2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className={`rounded-3xl bg-white/60 shadow-lg backdrop-blur-xl p-6 ${
                  index === 1
                    ? " md:col-span-2 lg:col-span-2 md:row-span-3"
                    : " md:col-span-1 lg:col-span-1 md:row-span-2"
                }`}
              >
                <CardContent className="p-0 flex flex-col justify-between h-full gap-4">
                  <p className={`${index === 1 ? "text-4xl" : ""}`}>
                    “{testimonial.text}“
                  </p>
                  <div className="flex items-center gap-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={50}
                      height={50}
                      className="rounded-full w-12 h-12"
                    />
                    <div className="">
                      <p className="font-bold text-lg">{testimonial.name}</p>
                      <p>{testimonial.child} parent</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
