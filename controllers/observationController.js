import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const addObservation = async (req, res) => {
  try {
    const { plantName, height, notes } = req.body;
    const imageUrl = req.file ? req.file.path : null;
    const observation = await prisma.observation.create({
      data: {
        plantName,
        height: parseFloat(height),
        notes,
        imageUrl,
        userId: req.user.id
      }
    });
    res.json(observation);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getObservations = async (req, res) => {
  try {
    const observations = await prisma.observation.findMany({
      where: { userId: req.user.id },
      orderBy: { date: 'asc' }
    });
    res.json(observations);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
