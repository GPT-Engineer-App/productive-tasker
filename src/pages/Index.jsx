import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl mb-4">Welcome to the Todo App</h1>
      <p className="mb-4">Manage your tasks efficiently and effectively.</p>
      <Link to="/all-tasks">
        <Button>Get Started</Button>
      </Link>
    </div>
  );
};

export default Index;