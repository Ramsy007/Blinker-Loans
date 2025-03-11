import { useState } from "react";

export const useAddress = (initialAddresses = []) => {
  const [addresses, setAddresses] = useState(initialAddresses);
  const [selectedAddress, setSelectedAddress] = useState(addresses[0]);
  const [isAdding, setIsAdding] = useState(false);
  const [newAddress, setNewAddress] = useState("");

  const handleAddAddress = () => {
    if (newAddress.trim()) {
      setAddresses([...addresses, newAddress]);
      setSelectedAddress(newAddress);
      setNewAddress("");
    }
    setIsAdding(false);
  };

  return {
    addresses,
    selectedAddress,
    isAdding,
    newAddress,
    setNewAddress,
    setIsAdding,
    handleAddAddress,
    setSelectedAddress,
  };
};