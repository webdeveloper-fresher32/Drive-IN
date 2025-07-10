import { useState } from 'react';
import { Car, CarFormData } from '@/types/dashboard';

export const useCarForm = () => {
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [editingCar, setEditingCar] = useState<Car | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  
  const [formData, setFormData] = useState<CarFormData>({
    carModel: '',
    carYear: '',
    rentalPricePerDay: '',
    location: '',
    status: '',
  });

  const openEditDialog = (car: Car) => {
    setEditingCar(car);
    setFormData({
      carModel: car.carModel,
      carYear: car.carYear.toString(),
      rentalPricePerDay: car.rentalPricePerDay.toString(),
      location: car.location,
      status: car.status,
    });
    setIsEditDialogOpen(true);
  };

  const closeEditDialog = () => {
    setIsEditDialogOpen(false);
    setEditingCar(null);
    setFormData({
      carModel: '',
      carYear: '',
      rentalPricePerDay: '',
      location: '',
      status: '',
    });
  };

  const updateFormField = (field: keyof CarFormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  return {
    isEditDialogOpen,
    editingCar,
    isLoading,
    formData,
    setIsLoading,
    openEditDialog,
    closeEditDialog,
    updateFormField,
  };
};
