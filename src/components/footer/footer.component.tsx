import type {ReactElement} from "react";
import {motion} from "framer-motion";

import {FaFacebook, FaInstagram, FaLinkedin, FaTwitter} from "react-icons/fa";
import {scaleUpWhileInViewMotion} from "../../motions/scaleUpWhileInView.motion.ts";

export default function FooterComponent(): ReactElement {
    return (
        <div className="bg-no-repeat bg-cover bg-center"
             style={{backgroundImage: 'url("/5.png")'}}>
            <motion.div
                {...scaleUpWhileInViewMotion(0.2)}
                className="container text-center space-y-10 py-10"
            >
                <div className="space-y-4">
                    <p className="text-3xl md:text-4xl font-bold">Join our email</p>
                    <p>Get 20% off per order</p>
                </div>
                <div className=" space-y-5">
                    <button className="primary-btn text-black">Subscribe</button>
                    <div className="flex flex-row justify-center gap-3">
                        <FaFacebook/>
                        <FaTwitter/>
                        <FaInstagram/>
                        <FaLinkedin/>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
