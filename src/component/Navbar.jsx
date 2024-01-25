import { useRouter } from "next/router";
import Button from "@mui/material/Button";

const Navbar = () => {
  const router = useRouter();
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        fontSize: "28px",
        marginTop: "20px",
      }}
    >
      <Button onClick={() => router.push("/clock")}> Clock</Button>
      <Button onClick={() => router.push("/stopwatch")}>Stopwatch</Button>
      <Button onClick={() => router.push("/timer")}>Timer</Button>
    </div>
  );
};

export default Navbar;
