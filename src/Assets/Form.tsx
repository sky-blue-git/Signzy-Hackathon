import { useState } from "react";

function Form() {
    const [fullName, setFullName] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [email, setEmail] = useState("");
    const [panCard, setPanCard] = useState("");
    const [aadhaarCard, setAadhaarCard] = useState("");
    const [creditCardType, setCreditCardType] = useState("");
    const [employmentType, setEmploymentType] = useState("");
    const [monthlyIncome, setMonthlyIncome] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(
            fullName,
            mobileNumber,
            email,
            panCard,
            aadhaarCard,
            creditCardType,
            employmentType,
            monthlyIncome
        );
    };

    const handleReset = () => {
        setFullName("");
        setMobileNumber("");
        setEmail("");
        setPanCard("");
        setAadhaarCard("");
        setCreditCardType("");
        setEmploymentType("");
        setMonthlyIncome("");
    };

    return (
        <div className="h-screen w-screen bg-blue-600 flex justify-center items-center">
            <div className="bg-white p-6 rounded-md w-96 shadow-lg">
                <fieldset>
                    <form action="#" method="get" className="flex flex-col gap-3">
                        <div className="flex flex-col">
                            <label className="font-medium mb-1">
                                Full Name*
                            </label>
                            <input
                                type="text"
                                name="fullName"
                                id="fullName"
                                value={fullName}
                                onChange={(e) =>
                                    setFullName(e.target.value)
                                }
                                required
                                className="border-2 border-gray-300 rounded-md p-2"
                            />
                        </div>
                        <div className="flex flex-col">
                            <div className="flex gap-2">
                                <label className="font-medium mb-1">Mobile Number*</label>
                                <input
                                    type="tel"
                                    name="mobileNumber"
                                    id="mobileNumber"
                                    value={mobileNumber}
                                    onChange={(e) =>
                                        setMobileNumber(e.target.value)
                                    }
                                    required
                                    placeholder="Mobile Number"
                                    className="border-2 border-gray-300 rounded-md p-2 w-1/2"
                                />
                                <label className="font-medium mb-1">Email Address*</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) =>
                                        setEmail(e.target.value)
                                    }
                                    required
                                    placeholder="Email Address"
                                    className="border-2 border-gray-300 rounded-md p-2 w-1/2"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex gap-2">
                                <label className="font-medium mb-1">PAN Card*</label>
                                <input
                                    type="text"
                                    name="panCard"
                                    id="panCard"
                                    value={panCard}
                                    onChange={(e) =>
                                        setPanCard(e.target.value)
                                    }
                                    placeholder="ABCDE1234F"
                                    className="border-2 border-gray-300 rounded-md p-2 w-1/2"
                                    required
                                />
                                <label className="font-medium mb-1">Aadhaar Card*</label>
                                <input
                                    type="text"
                                    name="aadhaarCard"
                                    id="aadhaarCard"
                                    value={aadhaarCard}
                                    onChange={(e) =>
                                        setAadhaarCard(e.target.value)
                                    }
                                    placeholder="123456789012"
                                    className="border-2 border-gray-300 rounded-md p-2 w-1/2"
                                    required
                                />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <label className="font-medium mb-1">Credit Card Type*</label>
                            <select
                                name="creditCardType"
                                id="creditCardType"
                                value={creditCardType}
                                onChange={(e) =>
                                    setCreditCardType(e.target.value)
                                }
                                className="border-2 border-gray-300 rounded-md p-2"
                                required
                            >
                                <option
                                    value=""
                                    disabled
                                >
                                    Select Card Type
                                </option>
                                <option value="1">Card Type 1</option>
                                <option value="2">Card Type 2</option>
                                <option value="3">Card Type 3</option>
                            </select>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex gap-2">
                                <label className="font-medium mb-1">Employment Type*</label>
                                <select
                                    name="employmentType"
                                    id="employmentType"
                                    value={employmentType}
                                    onChange={(e) =>
                                        setEmploymentType(e.target.value)
                                    }
                                    className="border-2 border-gray-300 rounded-md p-2 w-1/2"
                                    required
                                >
                                    <option
                                        value=""
                                        disabled
                                    >
                                        Employment Type
                                    </option>
                                    <option value="1">Employment Type 1</option>
                                    <option value="2">Employment Type 2</option>
                                    <option value="3">Employment Type 3</option>
                                </select>
                                <label className="font-medium mb-1">Monthly Income*</label>
                                <input
                                    type="text"
                                    name="monthlyIncome"
                                    id="monthlyIncome"
                                    value={monthlyIncome}
                                    onChange={(e) =>
                                        setMonthlyIncome(e.target.value)
                                    }
                                    placeholder="Monthly Income"
                                    required
                                    className="border-2 border-gray-300 rounded-md p-2 w-1/2"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="bg-blue-600 text-white py-2 px-4 rounded-md mt-4 hover:bg-blue-700"
                            onClick={(e) => handleSubmit(e)}
                        >
                            Submit Application
                        </button>
                    </form>
                </fieldset>
            </div>
        </div>
    );
}

export default Form;
