import dayjs from 'dayjs';
import { create } from 'zustand';

export const useMensajeStore = create((set) => ({
  data: {
    mensaje: "",
    animacion: 10,
    programado: false,
    dias: "Todos los días",
    fechaInicio: dayjs().startOf('day'),
    fechaInicioFormatted: "",
    horaInicio: dayjs().hour( 0 ).minute( 0 ),
    horaInicioFormatted: "",
    horaFin: dayjs().hour( 23 ).minute( 59 ),
    horaFinFormatted: "",
    fechaFin: dayjs().startOf('day'),
    fechaFinFormatted: ""
  },
  setMensaje: ({target}) => set((state) => ({
    data: {
      ...state.data,
      mensaje: target.value
    }
  })),
  setAnimacion: (animacion) => set((state) => ({
    data: {
      ...state.data,
      animacion
    }
  })),
  setProgramado: ({target}) => set((state) => ({
    data: {
      ...state.data,
      programado: target.checked
    }
  })),
  setDias: (dias) => set((state) => ({
    data: {
      ...state.data,
      dias
    }
  })),
  setHoraInicio: (horaInicio) => set((state) => ({
    data: {
      ...state.data,
      horaInicio,
      horaInicioFormatted: horaInicio.format( 'HH:mm' )
    }
  })),
  setHoraFin: (horaFin) => set((state) => ({
    data: {
      ...state.data,
      horaFin,
      horaFinFormatted: horaFin.format( 'HH:mm' )
    }
  })),
  setFechaInicio: (fechaInicio) => set((state) => ({
    data: {
      ...state.data,
      fechaInicio,
      fechaInicioFormatted: fechaInicio.format( 'YYYY-MM-DD' )
    }
  })),
  setFechaFin: (fechaFin) => set((state) => ({
    data: {
      ...state.data,
      fechaFin,
      fechaFinFormatted: fechaFin.format( 'YYYY-MM-DD' )
    }
  }))
}))