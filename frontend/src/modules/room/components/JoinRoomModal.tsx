interface JoinRoomModalProps {
  open: boolean;
  onClose: () => void;
}

export default function JoinRoomModal({
  open,
}: JoinRoomModalProps) {
  if (!open) return null;

  return (
    <div>
      Join Room Modal
    </div>
  );
}