import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking as deleteBookingApi } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useDeleteBooking() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteBooking } = useMutation({
    mutationFn: deleteBookingApi,

    onSuccess: () => {
      toast.success(`Booking deleted successfully`);
      queryClient.invalidateQueries(["bookings"]);
    },

    onError: () => toast.error("There was an error deleting booking"),
  });

  return { isDeleting, deleteBooking };
}
