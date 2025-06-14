import Image from "next/image";

import DataImage from "@/public/data";

import HeroInfo from "@/components/HeroInfo";

import Link from "next/link";

// React Server Components
import * as motion from "motion/react-client";

export default function Home() {
  return (
    <>
      {/*Tittle*/}
      <motion.div className="py-20" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 100, scale: 1 }} transition={{ duration: 0.5 }}>
        <h1 className="sm:text-5xl/tight text-3xl sm:text-center text-left">
          Solusi Logistik Laut yang Andal dan Terpercaya <br /> Bersama Kami
        </h1>
      </motion.div>
      {/*Tittle*/}

      {/* Image hero */}
      <div className="w-full mx-auto relative">
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 100, scale: 1 }} transition={{ delay: 0.5 }}>
          <Image src={DataImage.Hero} alt="Hero Image" priority />
        </motion.div>

        <HeroInfo />
      </div>
      {/* Image hero */}

      {/* Layanan */}
      <div className="grid lg:grid-cols-3 mt-32 gap-10 md:grid-cols-2" id="layanan">
        <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 100, y: 0 }} transition={{ delay: 0.5 }} viewport={{ once: true }} className="shadow-2xl p-7 rounded-2xl">
          <i className="ri-service-fill ri-3x text-shadow-zinc-500"></i>
          <p className="font-semibold text-2xl/normal mb-2">Komitmen</p>
          <p className="text-base/loose">Sebagai perusahaan jasa kami mengedepankan komitmen dalam bekerja sehingga pelayanan yang dihasilkan mempunyai mutu dan kaulitas yang bisa dipertanggungjawabkan terhadap customer.</p>
          <p className="text-base/loose opacity-50 font-light">As a service company, we are focusing into commitment work so that the prodice high standard and quality service that can be accounted for by customer.</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 100, y: 0 }} transition={{ delay: 0.7 }} viewport={{ once: true }} className="shadow-2xl p-7 rounded-2xl">
          <i className="ri-verified-badge-fill ri-3x text-shadow-zinc-500"></i>
          <p className="font-semibold text-2xl/normal mb-2">Terpercaya</p>
          <p className="text-base/loose">
            Sebuah perusahaan jasa harus memliki sifat terpercaya dalam melakukan pekerjaan yang diberikan, terpercaya memberikan harga yang kompetitif serta terpercaya dalam menjamin kerahasiaan informasi dan data pelanggan.
          </p>
          <p className="text-base/loose opacity-50 font-light">
            A service company must have a trustworthy nature in doing the work given, be trusted to provide competitive prices and be trusted in ensuring the confidentiality of customer information and data.
          </p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 100, y: 0 }} transition={{ delay: 0.9 }} viewport={{ once: true }} className="shadow-2xl p-7 rounded-2xl">
          <i className="ri-bar-chart-box-fill ri-3x text-shadow-zinc-500"></i>
          <p className="font-semibold text-2xl/normal mb-2">Solusi & Inovasi</p>
          <p className="text-base/loose">Semua masalah customer yang ada harus dicarikan solusi melalui inovasi yang berkesinambungan sehingga tercapai biaya operasi yang efisien.</p>
          <p className="text-base/loose opacity-50 font-light">All customer problems that arise should be sought trough solution and innovation so that can be achieved efficient financing</p>
        </motion.div>
      </div>
      {/* Layanan */}

      {/* Proyek */}
      <div className="mt-32">
        <motion.h1 initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 100, y: 0 }} transition={{ delay: 0.9 }} viewport={{ once: true }} className="text-4xl/normal text-center font-semibold " id="proyek">
          Proyek
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 100, y: 0 }} transition={{ delay: 0.9 }} viewport={{ once: true }} className="text-base/loose text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia aspernatur rerum sequi, consectetur, officia facilis et voluptatum optio architecto inventore pariatur eaque? Quae modi quod officiis laudantium nobis! Aspernatur
          voluptas debitis incidunt optio eum error aperiam iusto earum laboriosam consectetur officia doloremque facere hic modi consequuntur veritatis eveniet, eos iure?
        </motion.p>

        <div className="mt-20 grid lg:grid-cols-3 md:grid-cols-2 gap-10">
          <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 100, y: 0 }} transition={{ delay: 0.9 }} viewport={{ once: true }} className="shadow-2xl p-4 rounded-2xl">
            <Image src={DataImage.Proyek1} alt="Proyek Image" className="rounded-tl-2xl rounded-tr-2xl" />
            <h1 className="font-semibold text-2xl mt-6 mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, voluptate.</h1>
            <p className="text-base/loose">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt cumque perferendis corporis, laborum omnis esse dolor expedita exercitationem quasi labore ab dolores nemo est doloremque eaque doloribus quod maxime repudiandae.
            </p>
            <div className="mt-6 mb-3">
              <Link href={"#"} className="bg-transparent border border-blue-900 w-fit rounded-md p-3 hover:bg-blue-900 hover:text-white cursor-pointer">
                Lihat Proyek
              </Link>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 100, y: 0 }} transition={{ delay: 0.9 }} viewport={{ once: true }} className="shadow-2xl p-4 rounded-2xl">
            <Image src={DataImage.Proyek2} alt="Proyek Image" className="rounded-tl-2xl rounded-tr-2xl" />
            <h1 className="font-semibold text-2xl mt-6 mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, repellendus!</h1>
            <p className="text-base/loose">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt cumque perferendis corporis, laborum omnis esse dolor expedita exercitationem quasi labore ab dolores nemo est doloremque eaque doloribus quod maxime repudiandae.
            </p>
            <div className="mt-6 mb-3">
              <Link href={"#"} className="bg-transparent border border-blue-900 w-fit rounded-md p-3 hover:bg-blue-900 hover:text-white cursor-pointer">
                Lihat Proyek
              </Link>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 100, y: 0 }} transition={{ delay: 0.9 }} viewport={{ once: true }} className="shadow-2xl p-4 rounded-2xl">
            <Image src={DataImage.Proyek3} alt="Proyek Image" className="rounded-tl-2xl rounded-tr-2xl" />
            <h1 className="font-semibold text-2xl mt-6 mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, molestias?</h1>
            <p className="text-base/loose">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt cumque perferendis corporis, laborum omnis esse dolor expedita exercitationem quasi labore ab dolores nemo est doloremque eaque doloribus quod maxime repudiandae.
            </p>
            <div className="mt-6 mb-3">
              <Link href={"#"} className="bg-transparent border border-blue-900 w-fit rounded-md p-3 hover:bg-blue-900 hover:text-white cursor-pointer">
                Lihat Proyek
              </Link>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 100, y: 0 }} transition={{ delay: 0.9 }} viewport={{ once: true }} className="shadow-2xl p-4 rounded-2xl">
            <Image src={DataImage.Proyek4} alt="Proyek Image" className="rounded-tl-2xl rounded-tr-2xl" />
            <h1 className="font-semibold text-2xl mt-6 mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, iusto.</h1>
            <p className="text-base/loose">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt cumque perferendis corporis, laborum omnis esse dolor expedita exercitationem quasi labore ab dolores nemo est doloremque eaque doloribus quod maxime repudiandae.
            </p>
            <div className="mt-6 mb-3">
              <Link href={"#"} className="bg-transparent border border-blue-900 w-fit rounded-md p-3 hover:bg-blue-900 hover:text-white cursor-pointer">
                Lihat Proyek
              </Link>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 100, y: 0 }} transition={{ delay: 0.9 }} viewport={{ once: true }} className="shadow-2xl p-4 rounded-2xl">
            <Image src={DataImage.Proyek5} alt="Proyek Image" className="rounded-tl-2xl rounded-tr-2xl" />
            <h1 className="font-semibold text-2xl mt-6 mb-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, dolor.</h1>
            <p className="text-base/loose">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt cumque perferendis corporis, laborum omnis esse dolor expedita exercitationem quasi labore ab dolores nemo est doloremque eaque doloribus quod maxime repudiandae.
            </p>
            <div className="mt-6 mb-3">
              <Link href={"#"} className="bg-transparent border border-blue-900 w-fit rounded-md p-3 hover:bg-blue-900 hover:text-white cursor-pointer">
                Lihat Proyek
              </Link>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 100, y: 0 }} transition={{ delay: 0.9 }} viewport={{ once: true }} className="shadow-2xl p-4 rounded-2xl">
            <Image src={DataImage.Proyek6} alt="Proyek Image" className="rounded-tl-2xl rounded-tr-2xl" />
            <h1 className="font-semibold text-2xl mt-6 mb-3">Pengiriman Cargo China - Indonesia</h1>
            <p className="text-base/loose">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt cumque perferendis corporis, laborum omnis esse dolor expedita exercitationem quasi labore ab dolores nemo est doloremque eaque doloribus quod maxime repudiandae.
            </p>
            <div className="mt-6 mb-3">
              <Link href={"#"} className="bg-transparent border border-blue-900 w-fit rounded-md p-3 hover:bg-blue-900 hover:text-white cursor-pointer">
                Lihat Proyek
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
      {/* Proyek */}

      {/* Kontak */}
      <div className="mt-32 sm:p-10 p-0" id="kontak">
        <motion.h1 initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 100, y: 0 }} transition={{ delay: 0.9 }} viewport={{ once: true }} className="text-4xl/normal text-center font-semibold ">
          Kontak
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 100, y: 0 }} transition={{ delay: 0.9 }} viewport={{ once: true }} className="text-base/loose text-center">
          Hubungi Kami, untuk mendapatkan penawaran terbaik hari ini !.
        </motion.p>

        <div className="mt-10 grid lg:grid-cols-2 grid-cols-1 gap-4">
          <motion.form
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 100, y: 0 }}
            transition={{ delay: 0.9 }}
            viewport={{ once: true }}
            action="https://formsubmit.co/primaakusumah.sbts@gmail.com"
            method="POST"
            className="shadow-2xl rounded-md p-10 w-full h-full flex flex-col justify-between"
            autoComplete="off"
          >
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label className="font-semibold">Nama Lengkap</label>
                <input type="text" name="nama" placeholder="Masukkan Nama Lengkap Anda..." className="border border-blue-400 p-2 rounded-md" required />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-semibold">Email</label>
                <input type="email" name="email" placeholder="Masukkan Email Anda..." className="border border-blue-400 p-2 rounded-md" required />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-semibold">Nomer Telpon</label>
                <input type="number" name="noHp" placeholder="Masukkan Nomer Telpon Anda..." className="border border-blue-400 p-2 rounded-md" required />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="pesan" className="font-semibold">
                  Pesan
                </label>
                <textarea name="pesan" id="pesan" cols="65" rows="7" placeholder="Pesan Anda..." className="border border-blue-400 p-2 rounded-md" required></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="bg-blue-900 text-white p-3 rounded-lg w-full cursor-pointer border border-blue-400  hover:bg-white hover:text-blue-600">
                  Kirim Pesan
                </button>
              </div>
            </div>
          </motion.form>

          <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 100, y: 0 }} transition={{ delay: 0.9 }} viewport={{ once: true }} className="shadow-2xl p-10 sm:w-fit mx-auto rounded-md max-w w-full">
            <h2 className="font-semibold">Alamat Kami</h2>
            <p>Jl. Pamarayan Rangkasbitung, Kp. Tipar RT. 015 RW. 001 Desa Sangiang, Kec. Pamarayan Kab. Serang</p>
            <div style={{ marginTop: "20px" }}>
              <h2 className="font-semibold">Maps</h2>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4879.982694059562!2d106.27977808588106!3d-6.269755253071967!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e421bcb4bb290a9%3A0xee1e8da2523e031b!2sKantor%20Desa%20Sangiang%2C%20Kec.%20Pamarayan!5e1!3m2!1sid!2sid!4v1748509223910!5m2!1sid!2sid"
                position="absolute"
                width="100%"
                height="400"
                loading="lazy"
              ></iframe>
              <div className="mt-7">
                <Link href={"https://maps.app.goo.gl/8c1zFHvHNytuQs1P8"} target="_blank" className="bg-blue-800 border border-blue-900 text-white w-fit rounded-md p-3 hover:bg-white hover:text-blue-900 cursor-pointer">
                  PT. Permata Shipping Line
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* Kontak */}

      {/* Bottom */}
      <div className="grid lg:grid-cols-2 gap-4 mt-20">
        {/* Kolom 1 */}
        <div className="flex-col md:items-start lg:text-left text-center items-center">
          <div className="flex gap-2 items-center">
            <Image src={DataImage.logo1} alt="Logo Image" priority className="w-10 h-10 relative" />
            <h2 className="sm:text-2xl/tight text-2xl font-bold">PT. Permata Shipping Line</h2>
          </div>
          <p className="mt-2 text-zinc-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id modi consequuntur nulla asperiores, recusandae veritatis?</p>

          <div className="flex gap-3 mt-4 justify-center lg:justify-start">
            <a href="#">
              <i className="ri-linkedin-box-fill ri-2x"></i>
            </a>
            <a href="#">
              <i className="ri-instagram-fill ri-2x"></i>
            </a>
            <a href="#">
              <i className="ri-whatsapp-fill ri-2x"></i>
            </a>
            <a href="#">
              <i className="ri-reddit-fill ri-2x"></i>
            </a>
          </div>
        </div>

        {/* Kolom 2 */}
        <div className="flex container gap-1 sm:justify-between justify-center sm:text-left text-center">
          <div>
            <a href="#beranda" className="font-semibold">
              Beranda
            </a>
            <ul className="opacity-75 text-zinc-400 mt-4 gap-2">
              <li>Telpon</li>
              <li>Terpercaya</li>
              <li>Armada</li>
              <li>terbaik</li>
            </ul>
          </div>
          <div>
            <a href="#layanan" className="font-semibold">
              Tentang
            </a>
            <ul className="opacity-75 text-zinc-400 mt-4 gap-2">
              <li>Telpon</li>
              <li>Terpercaya</li>
              <li>Armada</li>
              <li>terbaik</li>
            </ul>
          </div>
          <div>
            <a href="#proyek" className="font-semibold">
              Proyek
            </a>
            <ul className="opacity-75 text-zinc-400 mt-4 gap-2">
              <li>Telpon</li>
              <li>Terpercaya</li>
              <li>Armada</li>
              <li>terbaik</li>
            </ul>
          </div>
          <div>
            <a href="#kontak" className="font-semibold">
              Kontak
            </a>
            <ul className="opacity-75 text-zinc-400 mt-4 gap-4">
              <li>Telpon</li>
              <li>Terpercaya</li>
              <li>Armada</li>
              <li>terbaik</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
    </>
  );
}
