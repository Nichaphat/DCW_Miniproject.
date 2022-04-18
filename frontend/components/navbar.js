// import { route } from 'next/dist/next-server/server/router';
import Link from "next/link";
import { Router } from "next/router";
import styles from "../styles/Home.module.css";

const Navbar = () => (
  <div>
    <nav class="flex items-center justify-between flex-wrap bg-[#6aaa96] p-6">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
      
        <span class="font-semibold text-xl tracking-tight">Books Shop</span>
      </div>

      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
          <a
            href="/"
            class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Home
          </a>
          <a
            href="/products"
            class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Cart
          </a>
          <a
            href="/login"
            class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Sign In
          </a>
          <a
            href="/register"
            class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
          >
            Sign Up
          </a>
        </div>
        <div>
          <a
            href="/logout"
            class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
          >
           Log Out
          </a>
        </div>
      </div>
    </nav>
  </div>
);

export default Navbar;
