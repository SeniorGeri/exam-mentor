"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, User, Clock, CreditCard } from "lucide-react"
import type { SharedData } from "@/types"
import { useForm, usePage } from "@inertiajs/react"
import { type FormEventHandler, useState } from "react"
import { useTranslation } from "react-i18next"
import { toast } from "sonner"
import { route } from "ziggy-js"
import type { CourseInstructor } from "../data"
import CustomInput from "@/components/input/custom-input"
import { useLocale } from "@/contexts/locale"
import { router } from "@inertiajs/react"

export function OrderModal({ courseInstructor }: { courseInstructor: CourseInstructor }) {
  const { t } = useTranslation("Frontend")
  const { auth } = usePage<SharedData>().props
  const [open, setOpen] = useState(false)
  const { currentLocale } = useLocale();

  const { data, setData, post, processing, reset, clearErrors } = useForm({
    course_instructor_id: courseInstructor.id,
    instructor_id: courseInstructor.instructor_id,
    value: courseInstructor.price,
    student_id: auth?.user?.id || "",
    email: auth?.user?.email || "",
    name: auth?.user?.name || "",
    phone: auth?.user?.phone || "",
  })

  const storeCountCreateInstructor: FormEventHandler = (e) => {
    e.preventDefault()
    post(route("frontend.order.store"), {
      preserveScroll: true,
      onSuccess: () => instructorCreated(),
      // onFinish: () => reset(),
    })
  }

  const closeModal: () => void = () => {
    clearErrors()
    reset()
    setOpen(false)
  }

  const instructorCreated = () => {
    toast(t("registered_succesfully_hold_tight"), { position: "top-right", duration: 2000 })
    router.visit(route("frontend.success"));
    closeModal()
  }

  const formattedPrice = new Intl.NumberFormat("en-UK", {
    style: "currency",
    currency: "EUR",
  }).format(courseInstructor.price)

  return (
    <Dialog open={open} modal={true}>
      <DialogTrigger asChild>
        <Button className="w-full text-lg py-6" onClick={() => setOpen(true)}>
          {t("register_now")}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-4xl">
        <DialogTitle className="text-2xl font-bold">{t("register_now")}</DialogTitle>
        <DialogDescription>{t("register_now_desc")}</DialogDescription>

        {/* Course Information Card */}
        <Card className="overflow-hidden border-2 border-primary/10 bg-card/50">
          <div className="bg-primary/5 p-6">
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">{courseInstructor.course?.title[currentLocale] || "Course Title"}</h3>
                <Badge variant="default" className="text-lg px-3 py-1">
                  {formattedPrice}
                </Badge>
              </div>
              <p className="text-muted-foreground">{courseInstructor.description || "Course description"}</p>
            </div>
          </div>


          <CardContent className="grid gap-6 p-6 sm:grid-cols-2">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <User className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{t("instructor")}</p>
                <p className="font-medium">{courseInstructor.instructor?.name || "Instructor Name"}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <BookOpen className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{t("lessons")}</p>
                <p className="font-medium">
                  {courseInstructor.lessons || 0} {t("lessons")}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{t("duration")}</p>
                <p className="font-medium">
                  {courseInstructor?.longevity || "0"} 
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <CreditCard className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{t("price")}</p>
                <p className="font-medium">{formattedPrice}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <form className="space-y-6" onSubmit={storeCountCreateInstructor}>
          {!auth?.user && (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <CustomInput
                type="text"
                placeholder={t("name")}
                value={data.name}
                setFormData={setData}
                id="name"
                className="col-span-1"
              />
              <CustomInput
                type="email"
                placeholder={t("email")}
                value={data.email}
                setFormData={setData}
                id="email"
                className="col-span-1"
              />
              <CustomInput
                type="text"
                placeholder={t("phone")}
                value={data.phone}
                setFormData={setData}
                id="phone"
                className="col-span-1"
              />
            </div>
          )}
          <DialogFooter className="gap-2">
            <DialogClose asChild>
              <Button variant="secondary" onClick={closeModal}>
                {t("close")}
              </Button>
            </DialogClose>

            <Button variant="default" disabled={processing || (data.name === "" && data.email === "" && data.phone === "")} asChild>
              <button type="submit">{t("finish_registration")}</button>
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
