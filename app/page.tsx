"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function PersonalBusinessSite() {
  const Button = ({ children, className, href }) => (
    <a href={href} className={`inline-flex items-center justify-center px-6 py-3 text-lg font-medium rounded-2xl ${className}`}>{children}</a>
  );

  const Card = ({ children }) => (
    <div className="rounded-2xl shadow-xl bg-white/80 backdrop-blur-lg border border-amber-200 p-6">{children}</div>
  );

  const CardContent = ({ children }) => <div>{children}</div>;

  const MailIcon = () => <span className="mr-2">📧</span>;
  const PhoneIcon = () => <span className="mr-2">📞</span>;
  const ArrowRightIcon = () => <span className="ml-1">➡️</span>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-100 via-orange-50 to-amber-200 flex flex-col items-center justify-center p-6 text-center">
      <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-5xl md:text-6xl font-extrabold text-amber-900 drop-shadow-xl">
        🌍 Connecting Rwanda & Poland
      </motion.h1>

      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }} className="mt-6">
        <Image src="/myProPic.jpeg" alt="My portrait" width={160} height={140} className="rounded-full shadow-xl border-4 border-amber-300 mx-auto" />
      </motion.div>

      <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.8 }} className="mt-4 max-w-2xl text-lg md:text-xl text-amber-800">
        I help introduce amazing products from Rwanda and East Africa to the Polish and European markets – from coffee to chili oil – building partnerships, creating opportunities, and telling powerful stories about African excellence.
      </motion.p>

      <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.8 }} className="mt-2 max-w-xl text-md text-amber-700">
        East Africa is one of the fastest-growing regions in the world – rich in talent, culture, and resources. Whether you want to source products, build partnerships, or explore opportunities, I can help you navigate Rwanda, Kenya, Uganda, and beyond.
      </motion.p>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9, duration: 0.8 }} className="grid md:grid-cols-2 gap-6 mt-10 w-full max-w-4xl">
        <Card>
          <CardContent>
            <h2 className="text-2xl font-bold text-amber-900">🚀 My Mission</h2>
            <p className="mt-3 text-amber-700 text-md">To connect markets, empower farmers and producers, and create value by introducing unique tropical products to Europe.</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <h2 className="text-2xl font-bold text-amber-900">💡 What I Offer</h2>
            <p className="mt-3 text-amber-700 text-md">Market research, supplier connections, product pitch creation, and introductions to buyers & distributors.</p>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.1, duration: 0.8 }} className="mt-10 flex flex-col md:flex-row gap-4 items-center">
        <Button href="mailto:byiringiroetienne2@gmail.com" className="bg-amber-600 hover:bg-amber-700 text-white">
          <MailIcon /> Email Me
        </Button>
        <Button href="tel:+4851618708" className="border border-amber-600 text-amber-800 hover:bg-amber-100">
          <PhoneIcon /> +48 514 618 708
        </Button>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }} className="mt-12 text-amber-700 text-sm flex items-center gap-2">
        Let’s make global trade personal <ArrowRightIcon />
      </motion.div>
    </div>
  );
}