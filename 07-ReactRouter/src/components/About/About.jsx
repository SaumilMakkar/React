import React from "react";  
   


export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="data:image/jpeg;base64,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"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            React development is carried out by passionate developers
                        </h2>
                        <p className="mt-6 text-gray-600">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem
                            accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde
                            aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!
                        </p>
                        <p className="mt-4 text-gray-600">
                            Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
                            Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}