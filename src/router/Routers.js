import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./../pages/Home";
import Tours from "./../pages/Tours";
import TourDetails from "./../pages/TourDetails";
import Login from "./../pages/Login";
import Register from "./../pages/Register";
import SearchResult from "./../pages/SearchResult";
import BackOffice from "../pages/BackOffice/BackOffice";
import BackOfficeEditTour from "../pages/BackOffice/BackOfficeEditTour";
import BackOfficeAddTour from "../pages/BackOffice/BackOfficeAddTour";
import BookedTour from "../pages/BookedTour";

export const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />

      <Route path="/home" element={<Home />} />
      <Route path="/tours" element={<Tours />} />
      <Route path="/tours/:id" element={<TourDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/tours/search" element={<SearchResult />} />
      <Route path="/backoffice" element={<BackOffice />} />
      <Route
        path="/backoffice/editTour/:tourId"
        element={<BackOfficeEditTour />}
      />
      <Route path="/backoffice/addTour" element={<BackOfficeAddTour />} />
      <Route path="//bookedTour" element={<BookedTour />} />
    </Routes>
  );
};
