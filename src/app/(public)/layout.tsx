export default async function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const cookieStore = await cookies()
  // const isAuthenticated = cookieStore.get('token')?.value

  // if (isAuthenticated) {
  // 	redirect('/home')
  // }

  return <PublicLayout>{children}</PublicLayout>;
}
