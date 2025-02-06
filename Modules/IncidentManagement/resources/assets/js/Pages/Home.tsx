import React from 'react';
import { Button } from '@/components/ui/button'; // adjust the import path as needed
import { Head } from '@inertiajs/react';

interface HomeProps {
  message: string;
}

const Home: React.FC<HomeProps> = ({ message }) => {
  return (
    <div className="p-4">
      <Head title="IncidentManagement" />
      <h1 className="text-2xl font-bold mb-4">{message}</h1>
      {/* Use a shadcn/ui component */}
      <Button variant="primary" onClick={() => alert('Hello from IncidentManagement!')}>
        Click Me
      </Button>
    </div>
  );
};

export default Home;
