"use client";

import { createNewProject } from "@/lib/api";
import { useState } from "react";
import Modal from "react-modal";
import Button from "./Button";
import Input from "./Input";

Modal.setAppElement("#modal");

export default function NewProject({ children, ...props }: { children?: any }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [name, setName] = useState("");
  const closeModal = () => setModalIsOpen(false);
  const openModal = () => setModalIsOpen(true);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await createNewProject(name);
    closeModal();
  };

  return (
    <div className="px-6 py-8 hover:scale-105 transition-all ease-in-out duration-200 flex justify-center items-center">
      <Button onClick={() => openModal()}>+ New Project</Button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        overlayClassName="bg-[rgba(0,0,0,.4)] flex justify-center items-center absolute top-0 left-0 h-screen w-screen"
        className="w-3/4 bg-white rounded-xl p-8"
      >
        <h1 className="text-3xl mb-6">New Project</h1>
        <form className="flex items-center" onSubmit={handleSubmit}>
          <Input
            placeholder="Project name"
            value={name}
            className=""
            onChange={(e: any) => setName(e.target.value)}
          />
          {/* @ts-ignore */}
          <Button type="submit">Create</Button>
        </form>
      </Modal>
    </div>
  );
}
