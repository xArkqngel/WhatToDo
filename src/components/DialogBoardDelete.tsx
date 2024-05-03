import { Dispatch, SetStateAction } from "react";
import { AlertDialog, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "./ui/alert-dialog"
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const DialogBoardDelete = ({ open, setOpen, setDelete }: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  setDelete: Dispatch<SetStateAction<boolean>>;
}) => {

  const router = useRouter()
  
  const handleDelete = () => {
    setDelete(true);
    setOpen(false);
  }

  return (
    <AlertDialog open={open}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Delete Board
          </AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to delete this board?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <Button variant="destructive" onClick={() => setOpen(false)}>Cancel</Button>
          <Button variant="default" onClick={handleDelete}>Delete</Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default DialogBoardDelete