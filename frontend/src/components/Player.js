const Player = ({ player }) => {
  if (!player) return null; // Prevents rendering if player is undefined

  return (
    <mesh position={[player.position ? player.position - 10 : 0, 0.5, 0]}>
      <sphereGeometry args={[0.2, 32, 32]} />
      <meshStandardMaterial color="red" />
    </mesh>
  );
};

export default Player;
