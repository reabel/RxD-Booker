import { ipcRenderer } from 'electron';

// This file handles UI interactions
declare global {
  interface Window {
    electronAPI: {
      send: (channel: string, data: any) => void;
      receive: (channel: string, func: Function) => void;
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('myButton');
    const output = document.getElementById('output');
    const bookingForm = document.getElementById('booking-form');

    if (button && window.electronAPI) {
        button.addEventListener('click', () => {
            window.electronAPI.send('button-clicked', 'Button was clicked!');
        });
    }

    if (window.electronAPI) {
        window.electronAPI.receive('response', (message: string) => {
            if (output) {
                output.innerText = message;
            }
        });
    }

    if (bookingForm) {
        bookingForm.addEventListener('submit', (event) => {
            event.preventDefault();
            
            // Get form data
            const formData = new FormData(bookingForm as HTMLFormElement);
            const bookingData = {
                name: formData.get('name'),
                date: formData.get('date'),
                time: formData.get('time'),
                service: formData.get('service')
            };
            
            console.log('Booking submitted:', bookingData);
            // Here you would typically save the booking or send it to a server
            
            alert('Booking submitted successfully!');
            (bookingForm as HTMLFormElement).reset();
        });
    }
});