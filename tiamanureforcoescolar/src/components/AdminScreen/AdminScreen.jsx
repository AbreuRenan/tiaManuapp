import React from 'react'
import { Route, Routes, useNavigate } from 'react-router'
import AdminHome from './AdminHome'
import MensagemTodosScreen from './MensagemTodosScreen'
import RouterGuard from '../helpers/RouterGuard'
import NovoAlunoScreen from './NovoAlunoScreen'
import AlunoScreen from './AlunoScreen'

function AdminScreen() {
  return (
    <Routes>
        <Route path="" element={<RouterGuard><AdminHome /></RouterGuard>} />
        <Route path="/mensagemgeral" element={<RouterGuard><MensagemTodosScreen /></RouterGuard>} />
        <Route path="/aluno" element={<RouterGuard><AlunoScreen /></RouterGuard>} />
        <Route path="/novoaluno" element={<RouterGuard><NovoAlunoScreen /></RouterGuard>} />
    </Routes>
  )
}

export default AdminScreen